<script setup>
import { ref } from 'vue';

const mediaPrefix = "./assets/videos/";
const currentMedia = ref("vagabondoro.jpg");
const projects = ref({
  "vagabondoro": {
    media: "vagabondoro.webm",
    github: "https://github.com/Sztakler/vagabondoro-timer",
    year: '2024',
    category: 'Web Design & Development',
    title: 'Vagabondoro Timer',
    description: 'Pellentesque vel tempus enim. Sed nec fermentum sapien. Nam aliquam laoreet velit. Donec at libero sollicitudin, dapibus neque quis, interdum leo. Cras metus nunc, ultrices in sapien pellentesque, imperdiet fermentum turpis. Quisque eget leo sit amet lacus vulputate maximus. Morbi facilisis orci sed volutpat fermentum. Maecenas et massa augue. Quisque id mattis justo. Pellentesque hendrerit eget ligula vel tempus. Mauris eu purus iaculis nisi maximus molestie. Etiam ut turpis velit. Aliquam convallis nisl ipsum, nec suscipit dolor accumsan sit amet. Mauris a lorem eget dui auctor imperdiet id et nunc. Integer rutrum erat pulvinar lacus tempor accumsan. Nunc condimentum urna in hendrerit tincidunt. Aenean porttitor quis ligula ac convallis.'
  },
  "ale-jazda": {
    media: "alejazda.mp4",
    github: "https://github.com/Sztakler/driver-license-uwr",
    year: '2023',
    category: 'Web Development',
    title: 'Ale Jazda!',
    description: 'Pellentesque vel tempus enim. Sed nec fermentum sapien. Nam aliquam laoreet velit. Donec at libero sollicitudin, dapibus neque quis, interdum leo. Cras metus nunc, ultrices in sapien pellentesque, imperdiet fermentum turpis. Quisque eget leo sit amet lacus vulputate maximus. Morbi facilisis orci sed volutpat fermentum. Maecenas et massa augue. Quisque id mattis justo. Pellentesque hendrerit eget ligula vel tempus. Mauris eu purus iaculis nisi maximus molestie. Etiam ut turpis velit. Aliquam convallis nisl ipsum, nec suscipit dolor accumsan sit amet. Mauris a lorem eget dui auctor imperdiet id et nunc. Integer rutrum erat pulvinar lacus tempor accumsan. Nunc condimentum urna in hendrerit tincidunt. Aenean porttitor quis ligula ac convallis.'
  },
  "objviewer": {
    media: "objviewer.mp4",
    github: "https://github.com/Sztakler/opengl-objectviewer",
    year: '2021',
    category: 'OpenGL & C++',
    title: 'Objviewer',
    description: 'Pellentesque vel tempus enim. Sed nec fermentum sapien. Nam aliquam laoreet velit. Donec at libero sollicitudin, dapibus neque quis, interdum leo. Cras metus nunc, ultrices in sapien pellentesque, imperdiet fermentum turpis. Quisque eget leo sit amet lacus vulputate maximus. Morbi facilisis orci sed volutpat fermentum. Maecenas et massa augue. Quisque id mattis justo. Pellentesque hendrerit eget ligula vel tempus. Mauris eu purus iaculis nisi maximus molestie. Etiam ut turpis velit. Aliquam convallis nisl ipsum, nec suscipit dolor accumsan sit amet. Mauris a lorem eget dui auctor imperdiet id et nunc. Integer rutrum erat pulvinar lacus tempor accumsan. Nunc condimentum urna in hendrerit tincidunt. Aenean porttitor quis ligula ac convallis.'
  },
  "default": {
    media: "",
    github: "",
    year: '',
    category: '',
    title: '',
    description: '',
  },
});

const currentProject = ref(projects.value['default']);

function updateCurrentProject(key) {
  currentProject.value = projects.value[key];
}

function resetCurrentProject() {
  currentProject.value = projects.value['default'];
}

const modalVisible = ref(false);

function toggleModal(projectName) {
  modalVisible.value = !modalVisible.value;
  updateCurrentProject(projectName);
}

function getMediaSrc() {
  return mediaPrefix + currentProject.value.media;
}

function getProjectGithubLink(key) {
  return projects.value[key].github;
}

</script>

<template>
  <article>
    <div class="projects">
      <button @click="toggleModal('ale-jazda')" class="project" @mouseover="updateCurrentProject('ale-jazda')">
        <div class="project-header">
          <span class="project-year">{{ projects['ale-jazda'].year }}</span>
          <span class="project-title">{{ projects['ale-jazda'].title }}</span>
        </div>
        <span class="project-category">{{ projects['ale-jazda'].category }}</span>
      </button>

      <button @click="toggleModal('vagabondoro')" class="project" @mouseover="updateCurrentProject('vagabondoro')">
        <div class="project-header">
          <span class="project-year">{{ projects['vagabondoro'].year }}</span>
          <span class="project-title">{{ projects['vagabondoro'].title }}</span>
        </div>
        <span class="project-category">{{ projects['vagabondoro'].category }}</span>
      </button>

      <button @click="toggleModal('objviewer')" class="project" @mouseover="updateCurrentProject('objviewer')">
        <div class="project-header">
          <span class="project-year">{{ projects['objviewer'].year }}</span>
          <span class="project-title">{{ projects['objviewer'].title }}</span>
        </div>
        <span class="project-category">{{ projects['objviewer'].category }}</span>
      </button>
    </div>
    <aside class="media">
      <video :src="getMediaSrc()" autoplay loop preload="auto" />
    </aside>
  </article>

  <Transition>
    <article v-if="modalVisible" class="project-modal">
      <div class="project-info">
        <button @click="toggleModal('default')">
          Close
        </button>
        <a :href="currentProject.github" target="_blank" class="project">
          <div class="project-header">
            <span class="project-year">{{ currentProject.year }}</span>
            <span class="project-title">{{ currentProject.title }}</span>
          </div>
          <span class="project-category">{{ currentProject.category }}</span>
        </a>
        <p>
          {{ currentProject.description }}
        </p>
      </div>

      <aside class="media">
        <video :src="getMediaSrc()" autoplay loop preload="auto" />
      </aside>
    </article>
  </Transition>
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
  height: 100%;
}

.projects {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 4;
}

button {
  all: unset;
}

.project {
  position: relative;
  display: flex;
  flex-direction: column;
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
  width: fit-content;
  min-width: 32px;
}

.project-title {
  font-size: 4.8rem;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  line-height: 100%;
}

.project-category {
  font-size: 1rem;
  align-self: flex-end;
  margin-bottom: 1rem;
  align-self: flex-start;
  max-width: unset;
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
  flex: 5;
}

aside>video {
  width: 100%;
  height: 100%;
}

.project-modal {
  position: fixed;
  padding-top: 58px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #d7d8d8;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from {
  transform: translateX(100%);
}

.v-leave-to {
  transform: translateX(100%);
}

.project-info {
  display: flex;
  flex-direction: column;
  width: 50%;
}

@media (max-width: 1900px) {
  .project {
    width: 100%;
    flex-direction: column;
    gap: 0rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-year {
    font-size: 1rem;
    margin-top: 0.4rem;
  }

  .project-category {
    font-size: 1rem;
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

