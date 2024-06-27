<script>
export default {}
</script>

<template>
  <article>
    <section>
      <div class="project">
        <span class="project-year">2024</span>
        <span class="project-title">Vagabondoro Timer</span>
        <span class="project-category">Wed Design & Development</span>
      </div>

      <div class="project">
        <span class="project-year">2023</span>
        <span class="project-title">Ale Jazda!</span>
        <span class="project-category">Web Development</span>
      </div>

      <div class="project">
        <span class="project-year">2021</span>
        <span class="project-title">Uga buga</span>
        <span class="project-category">Uga buga ratatata</span>
      </div>

    </section>
  </article>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 0.5rem;
}

.project-year {
  font-size: 1rem;
  color: #808080;
  align-self: flex-start;
  margin-top: 1rem;
}

.project-title {
  font-size: 4.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-category {
  font-size: 1rem;
  max-width: 15ch;
  align-self: flex-end;
  margin-bottom: 1rem;
}

.project:hover .project-title {
  text-transform: none;
}

</style>
