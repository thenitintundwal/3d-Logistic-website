import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollScenes() {
  const sections = gsap.utils.toArray("section");

  sections.forEach((section, index) => {
    gsap.set(section, { autoAlpha: 0, y: 40 });

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to(section, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }),
      onEnterBack: () =>
        gsap.to(section, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }),
      onLeave: () => gsap.to(section, { autoAlpha: 0, y: -20, duration: 0.4 }),
      onLeaveBack: () =>
        gsap.to(section, { autoAlpha: 0, y: 20, duration: 0.4 }),
    });
  });

  // Placeholder 3D scene visibility toggles via custom events/classes could go here
}

export function killScrollScenes() {
  ScrollTrigger.getAll().forEach((st) => st.kill());
}
