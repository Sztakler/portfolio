<script>
export default {}
</script>

<template>
  <article>
    <header>
      <img src="../assets/cv-morda.png" />
      <h2>Hi, Krystian here ;)</h2>
    </header>
    <section>
      <p>I profoundly believe that beautiful design and good design are the same thing. As a designer and developer I
        strive to create the most visually pleasing and ergonomic interfaces possible.</p>
      <p>For web development my preferred tools are <a href="https://vuejs.org/">Vue.js</a> and <a
          href="https://sass-lang.com/">Sass</a>. Most of my recent projects have been built using these technologies.
        I'm also experienced
        with
        <a href="https://react.dev/">React</a>
        and <a href="https://tailwindcss.com/">TailwindCSS</a>.
      </p>
      <p>I'm the founder and developer of a small indie game studio called Kiki/Bouba. Our common belief is that games
        can
        be a form of art, and we aim to create experiences that are both emotionally engaging and provide satisfying
        gameplay. We also design and develop various web applications in the spirit of the FOSS philosophy. However,
        recognizing the shortcomings of many FOSS projects, such as uninteresting visuals and inferior interfaces, we
        strive
        to elevate user experience through engaging, aesthetic designs and a strong focus on ergonomics and
        functionality.
      </p>
      <p>In addition to developing and designing, I'm an aspiring writer currently working on a fantasy novel. Recently,
        I
        have picked up an interest in analog photography and returned to songwriting and playing instruments.</p>
      <p>Growing up in the rural areas of Upper Silesia, I developed a fondness for nature, especially mountains.
        Activities
        like hiking, climbing, running, and biking in green scenery make my heart race with joy.</p>
    </section>
  </article>
</template>

<style scoped>
@import '../style.css';

article {
  height: 100vh;
}

header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 2rem;
}

img {
  height: 10rem;
  width: 10rem;
  border-radius: 100%;
  object-fit: cover;
}

article {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
