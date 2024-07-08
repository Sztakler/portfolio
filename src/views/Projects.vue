<script setup>
import { ref } from 'vue';

const mediaPrefix = "./assets/videos/";
const currentMedia = ref("vagabondoro.jpg");
const projects = ref({
  "vagabondoro": "vagabondoro.webm",
  "ale-jazda": "alejazda.mp4",
  "ugabuga": "objviewer.mp4",
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
      <a href="https://github.com/Sztakler/vagabondoro-timer" target="_blank" class="project"
        @mouseover="updateMedia('vagabondoro')" @mouseleave="resetMedia">
        <div class="project-header">
          <span class="project-year">2024</span>
          <span class="project-title">Vagabondoro Timer</span>
        </div>
        <span class="project-category">Wed Design & Development</span>
      </a>

      <a href="https://github.com/Sztakler/driver-license-uwr" target="_blank" class="project"
        @mouseover="updateMedia('ale-jazda')" @mouseleave="resetMedia()">
        <div class="project-header">
          <span class="project-year">2023</span>
          <span class="project-title">Ale Jazda!</span>
        </div>
        <span class="project-category">Web Development</span>
      </a>

      <a href="https://github.com/Sztakler/opengl-objectviewer" target="_blank" class="project"
        @mouseover="updateMedia('ugabuga')" @mouseleave="resetMedia()">
        <div class="project-header">
          <span class="project-year">2021</span>
          <span class="project-title">Objviewer</span>
        </div>
        <span class="project-category">OpenGL & C++</span>
      </a>
    </div>
    <aside class="media">
      <video :src="currentMedia" autoplay loop preload="auto" />
    </aside>
  </article>
</template>

<style scoped>
a {
  all: unset;
}

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
  cursor: pointer;
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

span {
  display: inline-block;
}

.title-wrapper {
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.project-year {
  font-size: 1rem;
  color: #808080;
  align-self: flex-start;
  margin-top: 1.2rem;
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
  background-color: #808080;
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

@media (max-width: 1900px) {
  .project {
    width: 100%;
    flex-direction: column;
    gap: 0rem;
  }

  .project-title {
    font-size: 2rem;
    display: block;

  }

  .project-year {
    font-size: 1rem;
    margin-top: 0.4rem;
  }

  .project-category {
    font-size: 1rem;
    align-self: flex-start;
    max-width: unset;
  }
}


@media (max-width: 768px) {


  .project-year {
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }

  aside {
    display: none;
  }
}
</style>

