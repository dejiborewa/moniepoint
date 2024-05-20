import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export const smoothScrollEffect = () => {
  //   const lenis = new Lenis({
  //     lerp: 0.1,
  //     smooth: true,
  //   });
  //   const scrollFn = () => {
  //     lenis.raf();
  //     requestAnimationFrame(scrollFn);
  //   };
  //   requestAnimationFrame(scrollFn);
  //   window.lenis = lenis;
};
