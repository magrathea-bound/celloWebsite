
<script lang="ts">
import {slide} from 'svelte/transition'
import { onMount } from 'svelte';

let { paragraphs, p_quant } = $props();

let expanded: boolean = $state(false);
let visible_count: number = $state(0);

function update() {
    // Desktop
    if (window.innerWidth >= 1024) {
        visible_count = p_quant[2];
    // Tablet
    } else if (window.innerWidth >= 768) {
        visible_count = p_quant[1];
    // Phone
    } else {
        visible_count = p_quant[0];
    };
}
onMount(() =>{
    update();
    window.addEventListener("resize", update);
    })
</script>

<div class="lg:w-6/12 bg-tertiary text-white rounded-4xl p-4 items-center flex flex-col transition-all duration-500 ease-in-out">
  <div class="space-y-5 my-5">
    <h1 class="text-white font-secondary text-7xl text-center p-2 underline align-middle">Bio</h1>

    {#each paragraphs.slice(0, visible_count) as paragraph}
        <p>{paragraph}</p>
    {/each}
    
    {#if expanded}
      <div transition:slide={{ duration:1000, axis:'y'}}>
    {#each paragraphs.slice(visible_count) as paragraph}
      <p>{paragraph}</p>
    {/each}
      </div>
    {/if}
  </div>
{#if visible_count <= paragraphs.length}
  <button onclick={()=> expanded = !expanded } 
    class="py-3 px-6 bg-secondary rounded-2xl text-lg">
    {expanded ? 'Read Less' : 'Read More'}
  </button>
{/if}
</div>
