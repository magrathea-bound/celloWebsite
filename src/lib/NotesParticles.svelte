<script>
  import Particles, { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
  import EightNote from '/src/assets/particles/eightNote.svg'
  import BarredEighth from '/src/assets/particles/barredEighth.svg'
  import QuarterRest from '/src/assets/particles/quarterRest.svg'

  void particlesInit(async (engine) => {
    await loadSlim(engine);
  });

  const config = {
    background: {color: "#1c1c1c"},
    particles: {
      number: { value: 25 },
      shape: {
        type: "image",
        options: {
          image: [
            {src: EightNote},
            {src: BarredEighth},
            {src: QuarterRest},
          ]
        }
      },
      size: {value: {min:10, max:25}},
      move: { enable: true, speed: 1, direction: "top", outModes: "out" },
      wobble: {enable: true, distance: 10, speed: 3}
    },
  };
</script>

<Particles id="tsparticles" options={config} />
