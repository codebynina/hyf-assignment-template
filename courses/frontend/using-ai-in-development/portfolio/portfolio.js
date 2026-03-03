document.addEventListener("DOMContentLoaded", () => {
  const horizontalWrapper = document.querySelector(".horizontal-wrapper");

  if (!horizontalWrapper) {
    console.warn("Horizontal wrapper not found");
    return;
  }

  const sections = horizontalWrapper.querySelectorAll("section, .hero");

  function getTotalScrollWidth() {
    let total = 0;
    sections.forEach((section) => {
      total += section.offsetWidth;
    });
    return total;
  }

  let totalScrollWidth = getTotalScrollWidth();

  // Recalculate widths on resize (important for responsiveness)
  window.addEventListener(
    "resize",
    () => {
      totalScrollWidth = getTotalScrollWidth();
    },
    { passive: true },
  );

  let animationFrameId = null;
  let lastScrollY = -1;

  function updateHorizontalScroll() {
    const maxVerticalScroll = document.body.scrollHeight - window.innerHeight;
    if (maxVerticalScroll <= 0) return;

    const scrollY = window.scrollY;

    const maxHorizontalScroll = totalScrollWidth - window.innerWidth;
    const progress = scrollY / maxVerticalScroll;

    const horizontalTranslate = progress * maxHorizontalScroll;

    horizontalWrapper.style.transform = `translateX(-${horizontalTranslate}px)`;
  }

  function onScroll() {
    const y = window.scrollY;
    if (y === lastScrollY) return;
    lastScrollY = y;

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(updateHorizontalScroll);
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Initial position (helps if page loads not at top)
  updateHorizontalScroll();
});
