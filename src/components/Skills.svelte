<script lang="ts">
  import { flip } from "svelte/animate";
  import { elasticOut } from "svelte/easing";
  let skills = [
    {
      name: "HTML",
      icon: "i-skill-icons-html",
      site: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: "i-skill-icons-css",
      site: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Javascript",
      icon: "i-skill-icons-javascript",
      site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Typescript",
      icon: "i-skill-icons-typescript",
      site: "https://www.typescriptlang.org",
    },
    {
      name: "NodeJS",
      icon: "i-skill-icons-nodejs-dark",
      site: "https://nodejs.org",
    },
    { name: "Svelte", icon: "i-skill-icons-svelte", site: "https://svelte.dev" },
    { name: "SvelteKit", icon: "i-skill-icons-svelte", site: "https://kit.svelte.dev" },
    { name: "React", icon: "i-skill-icons-react-dark", site: "https://react.dev" },
    { name: "NextJS", icon: "i-skill-icons-nextjs-dark", site: "https://nextjs.org" },
    { name: "Vite", icon: "i-skill-icons-vite-dark", site: "https://vitejs.dev" },
    {
      name: "TailwindCSS",
      icon: "i-skill-icons-tailwindcss-dark",
      site: "https://tailwindcss.com",
    },
    { name: "MongoDB", icon: "i-skill-icons-mongodb", site: "https://www.mongodb.com" },
    { name: "MySQL", icon: "i-skill-icons-mysql-dark", site: "https://www.mysql.com" },
    { name: "SQLite", icon: "i-skill-icons-sqlite", site: "https://www.sqlite.org" },
    { name: "Git", icon: "i-skill-icons-git", site: "https://git-scm.com" },
    { name: "Rust", icon: "i-skill-icons-rust", site: "https://www.rust-lang.org" },
    { name: "VSCode", icon: "i-skill-icons-vscode-dark", site: "https://code.visualstudio.com" },
    { name: "Linux", icon: "i-skill-icons-linux-dark", site: "https://www.linux.org" },
  ];
</script>

<div class="p-b-2 m-t-4 w-full">
  <div class="flex justify-center items-center">
    <hr class="flex-1 mx-1 my-0 text-alt-color/20" />
    <button
      class="text-xl font-bold select-none outline-none border-none bg-transparent text-alt-color cursor-pointer font-sans"
      on:click={() => {
        skills = skills.reverse();
      }}
    >
      My Skills
    </button>
    <hr class="flex-1 mx-1 my-0 text-alt-color/20" />
  </div>
  <div class="w-full flex flex-wrap justify-center">
    {#each skills as skill (skill.name)}
      <a
        animate:flip={{ duration: 1500, easing: (x) => elasticOut(x) }}
        class="h-28 w-28 flex flex-col cursor-pointer justify-center rounded p-2 text-center text-alt-color decoration-none transition-all hover:bg-accent/10"
        href={skill.site}
        target="_blank"
      >
        <div class="flex justify-center text-5xl">
          <div class={skill.icon} />
        </div>
        <span class="font-medium">
          {skill.name}
        </span>
      </a>
    {/each}
  </div>
  <hr class="text-alt-color/20" />
</div>
