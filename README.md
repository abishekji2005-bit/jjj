# JJJ Collective Experience

A premium, story-driven digital experience that blends the best interaction patterns from award-winning agencies, product sites, and experimental studios.

## Project Folder Structure
```
/src
  /animations
  /components
  /hooks
  /sections
  /styles
  /three
  App.jsx
  main.jsx
index.html
```

## Installation Instructions
```bash
npm install
npm run dev
```

## Component Breakdown
| Component | Responsibility | Interaction Pattern |
| --- | --- | --- |
| `Loader` | Animated loader overlay | Intro loading animation and page transition |
| `Navbar` + `MagneticButton` | Hover-activated navigation and CTA | Hover-based navigation + magnetic cursor response |
| `CursorAura` | Ambient background effect | Mouse-based interaction and ambient parallax |
| `Hero` | Animated hero sequence | Cinematic hero + parallax orbit + micro animations |
| `Capabilities` | Feature showcase cards | Hover elevation + scroll reveal |
| `Story` | Scroll-driven storytelling | Scroll-triggered animations + pinned visual |
| `Showcase` | Interactive component grid | Hoverable cards + dynamic typography |
| `Work` | Case study previews | Minimalist portfolio cards |
| `Lab` | WebGL vignette | Lazy-loaded Three.js scene |
| `CTA` | Conversion section | Section transition + gradient emphasis |
| `Footer` | Closing navigation | Minimal footer links |

## Feature Inspiration Mapping
| Feature | Inspired by (site) | How it was adapted |
| --- | --- | --- |
| Cinematic hero intro | activetheory.net, resn.co.nz | Hero typography with staggered GSAP entrance and ambient orbit |
| Hover-based navigation | instrument.com, dogstudio.co | Minimal nav with underlines + magnetic CTA |
| Scroll storytelling | nytimes.com/projects/2012/snow-fall, theboat.nfb.ca | Pinned narrative visuals with scroll-triggered cards |
| Interactive cards | stripe.com, linear.app | Premium cards with hover lift, glow, and data metrics |
| WebGL vignette | bruno-simon.com, lusion.co | Lightweight Three.js torus knot with ambient lighting |
| Minimal product section | apple.com, figma.com | Balanced spacing and crisp typography |
| Animated loader | stripe.com, framer.com | Loader bar with glow + transition overlay |
| Ambient background | webflow.com, adobe.com | Noise texture + gradient aura reacting to cursor |

## Performance Notes
- Heavy WebGL content is lazy-loaded in the `Lab` section.
- Scroll animations are batched with GSAP + ScrollTrigger.
- Parallax is powered by requestAnimationFrame to avoid layout thrash.
