<script setup>
  import {ref} from 'vue';

  const mediaPrefix = "./assets/videos/";
  const currentMedia = ref("vagabondoro.jpg");
  const projects = ref({
    "vagabondoro": "vagabondoro.webm",
    "ale-jazda": "popcat.webm",
    "ugabuga": "luna_crunching.webm",
    "default": "",
  });

  const updateMedia = (key) => {
    currentMedia.value = mediaPrefix + projects.value[key];
  }

  const resetMedia = () => {
    currentMedia.value = mediaPrefix + projects.value['default'];
  }

</script>

<template>
  <article>
    <div class="projects">
      <div class="project" @mouseover="updateMedia('vagabondoro')" @mouseleave="resetMedia">
        <span class="project-year">2024</span>
        <span class="project-title">Vagabondoro Timer</span>
        <span class="project-category">Wed Design & Development</span>
      </div>

      <div class="project" @mouseover="updateMedia('ale-jazda')" @mouseleave="resetMedia()">
        <span class="project-year">2023</span>
        <span class="project-title">Ale Jazda!</span>
        <span class="project-category">Web Development</span>
      </div>

      <div class="project" @mouseover="updateMedia('ugabuga')" @mouseleave="resetMedia()">
        <span class="project-year">2021</span>
        <span class="project-title">Uga buga</span>
        <span class="project-category">Uga buga ratatata</span>
      </div>
    </div>
    <aside class="media">
      <video :src="currentMedia" autoplay loop preload="auto"/>
    </aside>
  </article>
</template>

<style scoped>

article {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 6;
}

.project {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 0.5rem;
  width: fit-content;
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

.project::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffffff;
  transition: width 0.5s ease-in-out;
}

.project:hover::after {
  width: 100%;
}

aside {
  flex: 4;
}

aside>video {
  width: 100%;
  height: 100%;
}

</style>
