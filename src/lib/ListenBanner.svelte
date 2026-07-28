<script lang="ts">
import Spotify from "/src/assets/spotify.svg"
import Itunes from "/src/assets/itunes-brands-solid.svg"
import Amazon from "/src/assets/amazon-music-svgrepo-com.svg"
import Pandora from "/src/assets/pandora-svgrepo-com.svg"
</script>

  <div class="md:fixed md:right-0 md:top-1/4 flex md:flex-col items-center space-y-3 w-full md:w-1/10">
    <h1 class="font-secondary text-white text-4xl underline mb-5">Listen</h1>
<a href="https://open.spotify.com/artist/4lJ0leiTzz8GPbevDUCvwU?si=SdIezAiVQyyQ2UwqHOM-6Q" target="_blank"
class="w-full mx-auto flex justify-center">
<img src={Spotify} alt="Spotify Icon" class="w-1/3">
</a>
<a href="https://music.apple.com/us/artist/christine-kralik/1724566551" target="_blank"
class="flex mx-auto justify-center w-full">
<img src={Itunes} alt="Itunes Icon" class="w-1/3">
</a>
<a href="https://music.amazon.com/artists/B0CPPRW7ZP/christine-kralik?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_U2fyPqQ8ilgK6JoIzZno2eBB2" 
target="_blank" class="flex mx-auto justify-center w-full">
<img src={Amazon} alt="Amazon Music Icon" class="w-1/3">
</a>
<a href="https://pandora.app.link/NVQO0gGVw2b" target="_blank"
class="flex mx-auto justify-center w-full">
<img src={Pandora} alt="Pandora Icon" class="w-1/3">
</a>
  </div>
