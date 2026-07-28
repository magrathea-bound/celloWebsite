<script lang="ts">
import {slide} from 'svelte/transition'
import { onMount } from 'svelte';
import { inViewport } from "./ViewPortAppear"

let { paragraphs, p_quant } = $props();

let expanded: boolean = $state(false);
let default_visible: number = $state(0);

function update() {
    // Desktop
    if (window.innerWidth >= 1024) {
        default_visible = p_quant[2];
    // Tablet
    } else if (window.innerWidth >= 768) {
        default_visible = p_quant[1];
    // Phone
    } else {
        default_visible = p_quant[0];
    };
}
onMount(() =>{
    update();
    window.addEventListener("resize", update);
    })
</script>


    {#each paragraphs.slice(0, default_visible) as paragraph}
        <p use:inViewport class="object-hidden-up">{paragraph}</p>
    {/each}
    
    {#if expanded}
      <div transition:slide={{ duration:1000, axis:'y'}}>
    {#each paragraphs.slice(default_visible) as paragraph}
      <p use:inViewport class="object-hidden-up">{paragraph}</p>
    {/each}
      </div>
    {/if}
{#if default_visible < paragraphs.length}
  <button onclick={()=> expanded = !expanded } 
    class="py-3 px-3 w-40 h-13 bg-secondary rounded-2xl text-lg">
    {expanded ? 'Read Less' : 'Read More'}
  </button>
{/if}
