Part A: Improvements Implemented

1.Fixed the issue where images were overlapping the text while scrolling by adjusting the layering with z-index, isolation, and pointer-events.

2.Removed the extra background movement in JavaScript so everything scrolls smoothly together.

3.Improved the layout by adjusting widths and making the scroll calculation update on window resize.

4.Made the JavaScript safer by checking elements properly before using them.

Part A: ASCII Diagram

Portfolio Project
├── index.html
│ ├── head (styles.css, Font Awesome)
│ └── body
│ └── .horizontal-wrapper
│ ├── header.hero
│ │ ├── background-layer (image)
│ │ └── content-layer (title, text, icons)
│ ├── section#projects
│ │ ├── background-layer (image)
│ │ └── content-layer
│ └── section.section-contact
│ ├── background-layer (image)
│ └── content-layer
├── styles.css
├── portfolio.js
└── images

Part A: 3 Things I Learned

1.I learned that z-index alone is not always enough. How elements are layered really matters when working with animations.

2.I learned that moving both the wrapper and background caused layout problems. Keeping the movement simple made everything smoother.

3.I learned how requestAnimationFrame helps make scroll animations more efficient and smoother.

Part B: Ethics and Risks

1. Security Risks

Risk: AI can give code that works but may not be secure.
How I will handle it: I will double-check code using trusted documentation and avoid copying code without understanding it.

2. Plagiarism / Copyright

Risk: AI might generate content that is too similar to existing work.
How I will handle it: I will rewrite things in my own words and make sure I understand the code I submit.

3. Over-reliance on AI

Risk: Relying too much on AI can slow down my learning and debugging skills.
How I will handle it: I will use AI as support, but I will test, debug, and try to solve problems myself first.
