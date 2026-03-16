<script lang="ts">
import {slide} from 'svelte/transition'
let expanded: boolean = $state(false);
</script>

<div class="w-6/12 bg-tertiary text-white rounded-4xl p-4 items-center flex flex-col transition-all duration-500 ease-in-out">
  <div class="space-y-5 my-5">
    <h1 class="text-white font-secondary text-7xl text-center p-2 underline align-middle">Bio</h1>
    <p>Dr. Christine Renée Kralik is the Assistant Professor of Cello, as the
      Bukolt Endowed Cello Chair at the University of Wisconsin Stevens Point.
      She was previously the Instructor of Cello at Middle Tennessee State
      University (2023 - 2024) in Murfreesboro, Tennessee, the University of
      Mississippi (2019 - 2023) in Oxford, Mississippi, and Angelo State
      University (2017 - 2019) in San Angelo, Texas.</p>

    <p>Dr. Kralik is a thriving young professional cellist who received her
      Doctorate of Musical Arts with an emphasis in cello performance from
      Texas Tech University in May of 2018. She holds a Masters in Music from
      the Cleveland Institute of Music and a Bachelor of Music from the
      University of Utah, where she was also named as the Outstanding Senior.
      She studied cello performance with Jeffrey Lastrapes at Texas Tech
      University, Cleveland Orchestra cellist Richard Weiss at the Cleveland
      Institute of Music, and Utah Symphony cellist Pegsoon Whang at the
      University of Utah.</p>

    <p>Dr. Kralik has a diverse symphonic and orchestral playing career. Dr.
      Kralik is principal cello of the Central Wisconsin Symphony and for the
      South Asian Symphony in India. She previously held principal positions in
      the North Mississippi Symphony Orchestra, The Tennessee Philharmonic, and
      as the substitute principal cellist of the Mobile Symphony in Alabama for
      the 2023 – 2024 season. She was previously a member of the Lubbock
      Chamber Orchestra acting as principal, and a member of the Lubbock,
      Amarillo, and Midland-Odessa Symphonies.</p>

    <p>Dr. Kralik has recently recorded in various recording studios in Salt
      Lake City Utah, and in Nashville Tennessee, producing movie scores, video
      game music, music for theme parks, and music for professional artists.
      She has an album of her own of Romantic era works for cello and piano
      titled: Impassioned Cello, works by Mendelssohn, Grieg, and Sibelius. Her
      collaborator and pianist on this album is Jared Pierce of Brigham Young
      University. This album can be found on Spotify, Amazon Music, Apple
      Music, and many other major platforms. She recently recorded a second
      album of works for cello and piano in the summer of 2024 with pianist
      Amanda Johnston of The University of Mississippi. Works recorded were the
      cello sonatas of Poulenc, Prokofiev, and single movement works by
      contemporary Canadian composers Colin Eatock and Jocelyn Morlock. She
      eagerly awaits the release of this album in 2026.</p>

    {#if expanded}
      <div transition:slide={{ duration:1000, axis:'y'}}>
        <p>Along with her active recording and orchestral career, she has
          performed in many recitals all over the country, collaborating with
          other musicians for numerous events and performances. Along with
          holding a busy performance schedule, Dr. Kralik finds great joy in
          teaching. She enjoys working with the cello students of the
          University of Wisconsin Stevens Point, as well as cello students in
          the surrounding area and from all over the world. Students of hers
          have successfully entered into other programs of study after
          graduating with their degree of study, with Dr. Kralik. Students have
          auditioned and been involved in various summer and academic string
          and music programs as well, receiving scholarships for their
          playing.</p>

        <p>This summer she looks forward to being the Cello Faculty member for
          the South Asian Symphony Orchestra Festival in Bangalore India in May
          of 2026, working with young to professional level students. She will
          also perform in Poland and Germany this July with the Summer
          International Music Academy. In the summers of 2018 - 2024, Dr.
          Kralik taught and performed as faculty for the Tennessee’s Governor’s
          School for the Arts, where she worked closely with students in cello
          master-classes and sectionals, and performed regularly with the other
          faculty in a chamber music series for the duration of Governor's
          School. Dr. Kralik has taught cello at the Interlochen Center for the
          Arts in Michigan in the summers of 2017 to 2019.</p>

        <p>In October of 2025 Dr. Kralik presented with her UWSP string
          colleagues at the Wisconsin Music Educators Association conference,
          presenting a discussion on a String Techniques Crash Course geared
          towards orchestra educators teaching each violin, viola, cello, and
          bass. In September of 2022, Dr. Kralik published an article in the
          American String Teachers Association Journal Vol. 73 No.3, 43 – 47,
          titled “Getting The Most Out of Recording Oneself: Learn to
          Incorporate Recording as Part of Good Practice Habits.” Since the
          publication of this article, Dr. Kralik has presented and held
          discussions on this topic in various venues. Most recently, in
          January of 2024, Dr. Kralik led a presentation for the Middle
          Tennessee State Band and Orchestra Association, a clinic for
          orchestra directors and educators in Murfreesboro, Tennessee. She
          presented for students, educators, and musicians at the All-West
          Region Clinic in Memphis, Tennessee of 2023, and the Lubbock
          Education Outreach Clinician for string orchestra teachers of
          Lubbock, Texas in June of 2022.</p>

        <p>At the American String Teachers Association Conference in March of
          2023 in Orlando, Florida, Dr. Kralik presented and held a panel
          discussion on a “Holistic Approach to Diversity, Equity, and
          Inclusion in String Programs at Secondary and Higher Education” for
          string educators, musicians, and orchestra directors. In preparation
          for this conference, she presented this topic for the All-West Region
          Clinic in February 2023 in Memphis, Tennessee. She has also presented
          for the College Music Society Conference at Rhodes College in
          Memphis, Tennessee in February of 2024, “Two Clarinet Trios by
          American Women Composers.” Dr. Kralik is a member of the RKP Trio and
          performs regularly in recital and concert with pianist Professor
          Adrienne Park, and clarinetist Dr. Michael Rowlett, both of the
          University of Mississippi.</p>

        <p>In her academic teaching, Dr. Kralik has enjoyed holding lecture
          courses on Music Theory, Musicology Ancient to Baroque Music history,
          String Education for Music Majors, as well as Appreciation for Music,
          creating her own curriculum in these courses. Dr. Kralik strives to
          be helpful to those that enter her classroom. As one learns to
          appreciate music in any of these courses, their heart grows, their
          minds expand, that through music they become more capable of being
          able to understand music, to hear harmonies around the world and the
          joy of creation in collaboration with others in all of these
          endeavors. Music is powerful and can bring wholeness and greater
          understanding to a person when they can learn and grasp it.</p>

        <p>Dr. Kralik performs on a German Wilhelm Hammig cello dated 1907 and
          an unnamed French cello bow thought to be from the Pierre Simon
          School circa 1880. </p>
      </div>
    {/if}
  </div>

  <button onclick={()=> expanded = !expanded } 
    class="py-3 px-6 bg-secondary rounded-2xl text-lg">
    {expanded ? 'Read Less' : 'Read More'}
  </button>
</div>
