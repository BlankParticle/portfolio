<script lang="ts">
  import { flip } from "svelte/animate";
  import { cubicOut } from "svelte/easing";

  let socials = [
    {
      name: "Mail",
      icon: "i-logos-google-gmail",
      site: "mailto:blankparticle@gmail.com",
    },
    {
      name: "Github",
      icon: "i-skill-icons-github-dark",
      site: "https://github.com/BlankParticle",
    },
    {
      name: "Discord",
      icon: "i-skill-icons-discord",
      site: "https://discord.com/users/1096392763144159252",
    },
    {
      name: "LinkedIn",
      icon: "i-skill-icons-linkedin",
      site: "https://www.linkedin.com/in/blankparticle",
    },
    {
      name: "Daily.dev",
      icon: "i-logos-web-dev-icon",
      site: "https://app.daily.dev/BlankParticle",
    },
    {
      name: "More",
      icon: "i-skill-icons-fastapi",
      site: "https://linktr.ee/BlankParticle",
    },
  ];
</script>

<div class="p-b-2 m-t-4 w-full">
  <div class="flex justify-center items-center">
    <hr class="flex-1 mx-1 my-0 text-alt-color/20" />
    <button
      class="text-xl font-bold select-none outline-none border-none bg-transparent text-alt-color cursor-pointer font-sans"
      on:click={() => {
        socials = socials.reverse();
      }}
    >
      Find Me Here
    </button>
    <hr class="flex-1 mx-1 my-0 text-alt-color/20" />
  </div>
  <div class="w-full flex flex-wrap justify-center">
    {#each socials as social (social.name)}
      <a
        animate:flip={{ duration: 1500, easing: cubicOut }}
        class="h-28 w-28 flex flex-col cursor-pointer justify-center rounded p-2 text-center text-alt-color decoration-none transition-all hover:bg-accent/10"
        href={social.site}
        target="_blank"
      >
        <div class="flex justify-center text-5xl">
          <div class={social.icon} />
        </div>
        <span class="font-medium">
          {social.name}
        </span>
      </a>
    {/each}
  </div>
  <hr class="text-alt-color/20" />
</div>
