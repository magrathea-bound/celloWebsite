<script lang="ts">
  import { fade } from "svelte/transition";
  import Signature from "/src/assets/Signture White v1.png"

  let scrollY = $state(0);
  const threshold = 500;
  

  let showNavbar = $derived(scrollY > threshold);
</script>

<svelte:window bind:scrollY />

<nav
  class="w-screen absolute  text-light-text flex justify-between z-10 text-secondary  transition-colors duration-500
      lg:px-8 lg:h-28 lg:bg-secondary lg:fixed {showNavbar ? 'lg:bg-secondary' : 'lg:bg-secondary/0'}">
  <a href="#top" class="lg:ml-10 h-full items-center flex">
    <img
      src={Signature}
      alt="Christine's Signature"
      class="h-1/2"
    />
  </a>

  <div class="hidden lg:flex text-white items-center font-secondary font-bold h-full">
    <a class="hover:text-tertiary mr-4 text-4xl" href="#top">Home</a>
    <a class="hover:text-tertiary mr-4 text-4xl" href="#about">About</a>
    <a class="hover:text-tertiary mr-4 text-4xl" href="#music">Music</a>
    <a class="hover:text-tertiary mr-4 text-4xl" href="#contact">Contact</a>
  </div>
</nav>
