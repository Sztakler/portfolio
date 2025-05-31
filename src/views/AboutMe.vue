<script>
export default {}
</script>

<template>
  <article>
    <img src="../assets/portrait.png" />
    <div class="text-content">
      <header>
        <img class="header-img" src="../assets/portrait.png" />
        <h2>Hi, Krystian here 😉</h2>
      </header>
      <div class="description">
        <p>Experienced Fullstack Developer with a strong foundation in systems programming, web technologies, and game development. Proficient in C++, Python, and TypeScript, I have hands-on experience building responsive web apps, scalable backend systems, and human-centered tools. My day-to-day work primarily involves React, React Native, Vue, and TailwindCSS.</p>
        <p>I'm also the Co-founder and lead developer of Kiki/Bouba, an indie studio crafting psychological horror games with a focus on atmosphere, branching narratives, and minimalist UI/UX. Passionate about open-source collaboration, functional aesthetics, and building meaningful products where technology meets emotion.
        </p>
      </div>
      <div class="contact">
      <h2>What is going on lately?</h2>
        <p>
<span class="bold">Redi</span> 🏃: A sports tracker I'm developing with Kiki/Bouba and a fellow designer. Redi aims to boost motivation for regular physical activity and offers social features, drawing inspiration from apps like Strava and Duolingo. My ongoing psychology studies play a key role here, allowing me to integrate psychological insights to enhance user engagement and motivation.
</p>
<p>
<span class="bold">No Longer Human</span> 🕷️: A psychological horror game set in a flood-stricken post-Soviet city, developed under the Kiki/Bouba studio. Here, I serve as Game Designer, Programmer, Lead of the Writing Team, and overall Team Lead, ensuring a cohesive and immersive experience.
</p>
      </div>
      <div class="contact">
        <h2>Want to talk?</h2>
        <p>
          You can find me on <a href="https://github.com/Sztakler" target="_blank">Github</a> or email me at <a
            href="mailto:krystian.jasionek@protonmail.com">krystian.jasionek@protonmail.com</a>.</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
@import '../style.css';

* {
  overflow: visible;
}

article {
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 4rem !important;
  line-height: 160%;
  overflow-y: none;
  height: 100%;
  scrollbar-width: none;
  padding-bottom: 100px;
}

article::-webkit-scrollbar {
  display: none;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  padding-right: 32px;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

p {
  max-width: 60ch;
  height: fit-content;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
}

img {
  height: auto;
  width: auto;
  object-fit: cover;
  max-height: 450px;
}

.header-img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  display: none;
}


h2 {
  line-height: 1.0;
  text-align: left;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

span.bold {
  font-weight: 600;
}

@media (max-width: 1366px) {
  article {
    font-size: 1rem;
  }

  img {
    display: none;
  }

  .header-img {
    height: 8rem;
    width: 8rem;
    display: block;
  }
}

@media (max-width: 768px) {
  article {
    font-size: 0.8rem;
  }

  .header-img {
    height: 6rem;
    width: 6rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .description {
    gap: 0.5rem;
  }
}
</style>
