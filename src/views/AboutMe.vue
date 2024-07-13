<script>
export default {}
</script>

<template>
  <article>
    <header>
      <img src="../assets/cv-morda.png" />
      <h2>Hi, Krystian here ;)</h2>
    </header>
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
      gameplay. We strive to elevate user experience through engaging, aesthetic designs and a strong focus on ergonomics
      and functionality.
    </p>
  </article>
</template>

<style scoped>
@import '../style.css';

article {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  line-height: 160%;
}

p {
  max-width: 60ch;
}

header {
  /* width: 100vw; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;
}

img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

h2 {
  line-height: 1.0;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 1366px) {
  article {
    font-size: 1rem;
  }

  img {
    height: 8rem;
    width: 8rem;
  }
}

@media (max-width: 768px) {
  article {
    font-size: 1rem;
  }

  img {
    height: 6rem;
    width: 6rem;
  }
}
</style>
