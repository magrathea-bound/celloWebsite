<script lang="ts">
let video: number = 0;
function videoNext(){
  video = (video + 1) % 3
}

function videoPrevious(){
  if (video === 0) {
    video = 2;
  } else {
    video = video - 1;
  }
}
</script>

<div class="w-full aspect-video">
  {#if video === 0}
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ybGevaOhDq0?si=i4aR45_N_opoisbW&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  {:else if video === 1}
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/luc6QGqDIOw?si=T2w4D9U7m7a59cKn&amp;start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  {:else if video === 2}
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/58h0UDUSjCM?si=_6Aa8ewcJAY0SQ0a&amp;start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  {/if}

  <div class="mx-15 absolute inset-0 text-4xl text-center items-center justify-between flex pointer-events-none">
    <button class="bg-tertiary/45 rounded-full size-15 text-gray-400 hover:bg-secondary pointer-events-auto"
      on:click={videoPrevious}>&lt</button>
    <button class="bg-tertiary/45 rounded-full size-15 text-gray-400 hover:bg-secondary pointer-events-auto"
      on:click={videoNext}>&gt</button>
  </div>
</div>
