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
  class="min-h-screen bg-(color repeat hero-circuit-board-green/5) font-sans antialiased relative overflow-hidden"
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
    class="absolute top-0 left-0 w-full h-full pointer-events-none"
    class:display-none={browser ? window.matchMedia("(any-pointer: coarse)").matches : true}
  >
    <span class="text-2xl relative" bind:this={pointer}>✨</span>
  </div>
</main>
