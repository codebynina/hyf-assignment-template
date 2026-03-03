const horizontalWrapper = document.querySelector('.horizontal-wrapper');
const sections = horizontalWrapper.querySelectorAll('section, .hero');
const backgroundLayers = [];

sections.forEach(section => {
    const backgroundLayer = section.querySelector('.background-layer');
    if  (backgroundLayer) { 
    backgroundLayers.push(backgroundLayer);
    }
});

let totalScrollWidth = 0;
sections.forEach(section => {
    totalScrollWidth += section.offsetWidth;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxVerticalScroll = document.body.scrollHeight - window.innerHeight;
    const horizontalTranslate = (scrollY/ maxVerticalScroll) * (totalScrollWidth - window.innerWidth);

    horizontalWrapper.style.transform = `translateX(-${horizontalTranslate}px)`;

    backgroundLayers.forEach(backgroundLayer => {
        backgroundLayer.style.transform = `translateX(-${horizontalTranslate}px)`;
    });
});


