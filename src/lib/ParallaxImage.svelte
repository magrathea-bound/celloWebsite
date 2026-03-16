<script lang="ts">
import {onMount} from "svelte";
function handleScroll(){
  const scrollPosition = window.scrollY;
  parallaxImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
}

let parallaxImage: HTMLDivElement;

onMount(()=>
{
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="relative h-screen w-screen overflow-hidden">
  <div bind:this={parallaxImage} class="absolute h-full w-full bg-[url(./assets/DSC03771v1.jpg)] bg-cover bg-top">
  </div>
</div>
