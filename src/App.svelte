<script lang="ts">
import Navbar from './lib/Navbar.svelte'
import HeaderBanner from './lib/HeaderBanner.svelte'
import Bio from './lib/Bio.svelte'
import ParallaxImage from './lib/ParallaxImage.svelte'
import NotesParticles from './lib/NotesParticles.svelte'
import VideoCarousel from './lib/VideoCarousel.svelte'
import AlbumCarousel from './lib/AlbumCarousel.svelte'
import Recording from './assets/DSC09726.jpg'
import CelloEye from "/src/assets/celloEye.png" 
import Email from "/src/assets/envelope.svg"
import FB from "/src/assets/facebook.svg"
import LinkedIn from "/src/assets/linkedin.svg"
import Spotify from "/src/assets/spotify.svg"
import Itunes from "/src/assets/itunes-brands-solid.svg"
import Amazon from "/src/assets/amazon-music-svgrepo-com.svg"
import Pandora from "/src/assets/pandora-svgrepo-com.svg"
</script>

<NotesParticles/>
<main class="h-screen w-screen relative">
  <Navbar/>
  <ParallaxImage/>
  <HeaderBanner>About Dr. Kralik</HeaderBanner>

  <div class="flex justify-around items-start my-10">
    <Bio/>
    <div class="bg-[url(./assets/bioPhoto.jpg)] h-screen w-5/12 bg-center bg-contain bg-no-repeat"></div>
  </div>

  <div class="w-screen h-auto">
    <img src={Recording} alt="Christine recording" class="w-screen">
  </div>

  <HeaderBanner>Music</HeaderBanner>

  <div class="w-2/3 p-10 mx-auto bg-tertiary rounded-4xl my-10">
    <h1 class="text-center my-3 font-secondary text-7xl text-white underline">Listen Now</h1>
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/artist/4lJ0leiTzz8GPbevDUCvwU?utm_source=generator&theme=0" title="Spotify Player" width="100%" height="352" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>

  <div class="my-10 w-2/3 p-10 bg-tertiary rounded-4xl mx-auto aspect-video relative ">
    <h1 class="text-center my-3 font-secondary text-7xl text-white underline">Videos</h1>
    <VideoCarousel/>
  </div>

  <div class="my-10 w-2/3 p-10 bg-tertiary rounded-4xl mx-auto aspect-video relative ">
    <h1 class="text-center my-3 font-secondary text-7xl text-white underline">Albums</h1>
    <AlbumCarousel/>
  </div>

  <HeaderBanner>Contact</HeaderBanner>

  <div class="w-screen h-5/12 overflow-hidden relative">
    <img src={CelloEye}
      alt="Christine with the cello scroll over her eye"
      class="-translate-y-45">
    <div class="absolute inset-0 flex items-center justify-end space-x-8 mx-20">
      <a href="mailto:christine.kralik@yahoo.com">
        <img src={Email} alt="Email Icon"
        class="w-20">
      </a>
      <a href="https://www.facebook.com/christine.kralik">
        <img src={FB} alt="Facebook Icon"
        class="w-20">
      </a>
      <a href="https://www.linkedin.com/in/dr-christine-kralik-72948ba2/">
        <img src={LinkedIn} alt="LinkedIn Icon"
        class="w-20">
      </a>
    </div>
  </div>

  <div class="fixed right-0 top-1/4 flex flex-col items-center space-y-3 translate-x-80">
    <h1 class="font-secondary text-white text-4xl underline mb-5">Listen</h1>
<img src={Spotify} alt="Spotify Icon"
    class="w-1/18">
<img src={Itunes} alt="Itunes Icon"
    class="w-1/18">
<img src={Amazon} alt="Amazon Music Icon"
    class="w-1/18">
<img src={Pandora} alt="Pandora Icon"
    class="w-1/18">
  </div>

</main>

<style>
</style>
