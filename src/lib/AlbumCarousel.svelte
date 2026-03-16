<script lang="ts">
import ImpassionedCello from "/src/assets/impassionedCello.jpg" 
import LyricalCello from "/src/assets/lyricalCello.jpg" 
import Halcyon from "/src/assets/halcyonSingle.jpg" 

let album: number = 0;
function albumNext(){
  album = (album + 1) % 3
}

function albumPrevious(){
  if (album === 0) {
    album = 2;
  } else {
    album = album - 1;
  }
}
</script>

<div class="w-full flex space-x-20 text-white">
  {#if album === 0}
<img src={Halcyon} alt="Halcyon for Violoncello and Piano by Christine Kralik and Amanda Johnston" 
    class="w-1/2">
    <div class="w-1/2">
          <h1 class="underline font-secondary text-5xl">Halcyon for Violoncello and Piano</h1>
          <p>
            Canadian composer and music educator Jocelyn Morlock (14 December 1969 – 27 March
            2023) was based in Vancouver, British
            Columbia. Morlock's music displays an individual personal style, and
            experimental post-modernism, but is focused on emotion. Her musical
            language is typically tonal or modal but is expanded with extended
            techniques and coloristic effects. Halcyon is a work written for
            cello and piano, written for and commissioned by cellist Ian
            Hampton, for Canada Music week in 2003.
          </p>
          <p>
            Johnston and Kralik enjoyed the expressive power of this work and
            the artful expression and depiction of the Halcyon, which is a bird
            native to Canada, living in woodland, and near streams. A Halcyon is
            a large bird with a substantial bill, a light blue upper body, with
            white underparts, and a blue breast.
          </p>
    </div>
  {:else if album === 1}
<img src={LyricalCello} alt="The Lyrical Cello by Christine Kralik and Amanda Johnston" 
    class="w-1/2">
    <div class="w-1/2">
          <h1 class="underline font-secondary text-5xl">The Lyrical Cello</h1>
          <p>
            This coming album, The Lyrical Cello, was recorded by cellist
            Christine Kralik and pianist Amanda Johnston in July of 2024. We
            eagerly await its release after all the love and work that was
            poured into this music and album. Works recorded and performed were
            the Cello Sonata, FP 143 by Francis Poulenc, the Cello Sonata in C
            major Op.119 by Sergei Prokofiev, Canterbury by Colin Eatock, and
            Halcyon by Jocelyn Morlock. Halcyon is already available to be
            downloaded and listened to.
          </p>
  </div>
  {:else if album === 2}
<img src={ImpassionedCello} alt="The Impassioned Cello by Christine Kralik and Jared A Pierce"
    class="w-1/2">
    <div class="w-1/2">
          <h1 class="underline font-secondary text-5xl">Impassioned Cello</h1>
          <p>
            Impassioned Cello was recorded in January of 2021 and released in
            December of 2023. Cellist Christine Kralik and pianist Jared Pierce
            collaborated in recording works by Jean Sibelius, Edvard Grieg, and
            Felix Mendelssohn. This album can be streamed and downloaded on
            various music platforms. A hardcopy of the album may also be
            purchased for 20 dollars plus shipping. Please email Christine
            Kralik at Christine.kralik@yahoo.com if interested in purchasing a
            CD.
          </p>
  </div>
  {/if}

  <div class="mx-15 absolute inset-0 text-4xl text-center items-center justify-between flex pointer-events-none">
    <button class="bg-tertiary/45 rounded-full size-15 text-gray-400 hover:bg-secondary pointer-events-auto"
      on:click={albumPrevious}>&lt</button>
    <button class="bg-tertiary/45 rounded-full size-15 text-gray-400 hover:bg-secondary pointer-events-auto"
      on:click={albumNext}>&gt</button>
  </div>
</div>
