<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Skills from "../components/Skills.svelte";
  import Socials from "../components/Socials.svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";

  let body = browser ? document.body : { clientWidth: 0, clientHeight: 0 };
  let coords = spring(
    { x: body.clientWidth * 0.1, y: body.clientHeight * 0.1 },
    {
      stiffness: 0.15,
      damping: 0.4,
    },
  );
  let pointer: HTMLSpanElement;
  coords.subscribe(({ x, y }) => {
    if (pointer) {
      pointer.style.left = `${x}px`;
      pointer.style.top = `${y}px`;
    }
  });
</script>

<main
  class="relative min-h-screen overflow-hidden bg-(color repeat hero-circuit-board-green/5) font-sans antialiased"
  on:mousemove={(e) => {
    coords.set({ x: e.clientX, y: e.clientY });
  }}
>
  <div class="mx-auto max-w-3xl w-full px-2 p-t-8 text-alt-color">
    <Hero />
    <Skills />
    <Socials />
  </div>
  <div
    class="pointer-events-none absolute left-0 top-0 h-full w-full"
    class:display-none={browser ? window.matchMedia("(any-pointer: coarse)").matches : true}
  >
    <span class="relative text-2xl" bind:this={pointer}>✨</span>
  </div>
</main>
