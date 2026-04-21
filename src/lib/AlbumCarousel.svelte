<script lang="ts">
import ImpassionedCello from "/src/assets/impassionedCello.jpg" 
import LyricalCello from "/src/assets/lyricalCelloAlbumCover.png" 
import Halcyon from "/src/assets/halcyonSingle.jpg" 

const impassioned = {
  title: 'Impassioned Cello',
  image: ImpassionedCello,
  about: `
            <p>Impassioned Cello was recorded in January of 2021 and released in
            December of 2023. Cellist Christine Kralik and pianist Jared Pierce
            collaborated in recording works by Jean Sibelius, Edvard Grieg, and
            Felix Mendelssohn. This album can be streamed and downloaded on
            various music platforms. A hardcopy of the album may also be
            purchased for $20 plus shipping. Please email Christine
            Kralik at Christine.kralik@yahoo.com if interested in purchasing a
            CD.</p>
`,
} 

const lyrical = {
  title: 'The Lyrical Cello',
  image: LyricalCello,
  about: `
      <p>This album brings together works that illuminate the many expressive dimensions of the cello—introspection, lyric warmth, nostalgia, brilliance, and a deep sense of connection to the natural world. Featuring music by Sergei Prokofiev, Francis Poulenc, and Canadian composers Jocelyn Morlock and Colin Eatock, the program reflects a rich spectrum of musical voices, each offering something distinctly personal yet universally resonant.</p>

      <p>Created in close collaboration with pianist Amanda Johnston, these performances highlight the dynamic interplay between cello and piano, revealing both instruments as equal partners in conversation. Johnston’s artistry and sensitivity bring depth and vibrancy to each work, shaping interpretations that are both nuanced and compelling.</p>

      <p>This project grew out of a 2023 collaborative recital during Kralik’s time as Lecturer of Cello at the University of Mississippi. With Johnston’s Canadian roots inspiring the inclusion of works by Morlock and Eatock, the program developed organically through shared musical curiosity and connection. At its core is Francis Poulenc’s Cello Sonata, a work whose vivid character and expressive dialogue first drew Kralik to build the program around it. Sergei Prokofiev’s Cello Sonata in C Major provides a powerful counterbalance, offering expansive lyricism, rhythmic vitality, and dramatic intensity.</p>

      <p>Together, these works form a thoughtfully curated program that explores contrast and cohesion—balancing atmosphere with clarity, and intimacy with brilliance. It is the combined hope of Kralik and Johnston that this recording invites listeners to slow down, listen deeply, and experience the expressive possibilities of the cello and piano in a meaningful and lasting way.</p>
`,
} 

const halcyon = {
  title: 'Halycon',
  image: Halcyon,
  about: `
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
`,
} 

let index: number = $state(0);
const albums = [lyrical,impassioned]
let album = $derived(albums[index]);

function indexNext(){
  index = (index + 1) % 2
}

function indexPrevious(){
  if (index === 0) {
    index = 1;
  } else {
    index = index - 1;
  }
}
</script>

<div class="w-full flex space-x-20 text-white">
  <div class="w-1/2 items-center flex">
<img src={album.image} alt="The album cover for {album.title}" 
    class="w-full aspect-square">
</div>
    <div class="w-1/2 space-y-5">
          <h1 class="underline font-secondary text-5xl">{album.title}</h1>
    {@html album.about}
    </div>

  <div class="mx-15 absolute inset-0 text-4xl text-center items-center justify-between flex pointer-events-none">
    <button class="bg-tertiary/45 rounded-full size-15 text-gray-400 hover:bg-secondary pointer-events-auto"
      onclick={indexNext}>&lt</button>
    <button class="bg-tertiary/45 rounded-full size-15 text-gray-400 hover:bg-secondary pointer-events-auto"
      onclick={indexPrevious}>&gt</button>
  </div>
</div>
