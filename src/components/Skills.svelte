<script>
  const skills = [
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
    { name: "Svelte", icon: "i-skill-icons-svelte", site: "https://svelte.dev" },
    { name: "SvelteKit", icon: "i-skill-icons-svelte", site: "https://kit.svelte.dev" },
    { name: "React", icon: "i-skill-icons-react-dark", site: "https://react.dev" },
    { name: "NextJS", icon: "i-skill-icons-nextjs-dark", site: "https://nextjs.org" },
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
  ];
</script>

<div class="m-b-2 m-t-4 w-full">
  <span class="text-xl font-bold">My Skills</span>
  <div class="w-full flex flex-wrap justify-center">
    {#each skills as skill}
      <a
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
</div>
