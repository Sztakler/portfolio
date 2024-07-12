<script setup>
import { ref } from 'vue';

const isProjectExpanded = ref(false);
const mediaPrefix = "./assets/videos/";
const currentMedia = ref("vagabondoro.jpg");
const projectNames = ['ale-jazda', 'vagabondoro','objviewer'];
const projects = ref({
  "ale-jazda": {
    id: 0,
    media: "alejazda.mp4",
    github: "https://github.com/Sztakler/driver-license-uwr",
    year: '2023',
    category: 'Web Development',
    title: 'Ale Jazda!',
    description: 'Pellentesque vel tempus enim. Sed nec fermentum sapien. Nam aliquam laoreet velit. Donec at libero sollicitudin, dapibus neque quis, interdum leo. Cras metus nunc, ultrices in sapien pellentesque, imperdiet fermentum turpis. Quisque eget leo sit amet lacus vulputate maximus. Morbi facilisis orci sed volutpat fermentum. Maecenas et massa augue. Quisque id mattis justo. Pellentesque hendrerit eget ligula vel tempus. Mauris eu purus iaculis nisi maximus molestie. Etiam ut turpis velit. Aliquam convallis nisl ipsum, nec suscipit dolor accumsan sit amet. Mauris a lorem eget dui auctor imperdiet id et nunc. Integer rutrum erat pulvinar lacus tempor accumsan. Nunc condimentum urna in hendrerit tincidunt. Aenean porttitor quis ligula ac convallis.',
    visible: false,
  },
  "vagabondoro": {
    id: 1,
    media: "vagabondoro.webm",
    github: "https://github.com/Sztakler/vagabondoro-timer",
    year: '2024',
    category: 'Web Design & Development',
    title: 'Vagabondoro Timer',
    description: 'Pellentesque vel tempus enim. Sed nec fermentum sapien. Nam aliquam laoreet velit. Donec at libero sollicitudin, dapibus neque quis, interdum leo. Cras metus nunc, ultrices in sapien pellentesque, imperdiet fermentum turpis. Quisque eget leo sit amet lacus vulputate maximus. Morbi facilisis orci sed volutpat fermentum. Maecenas et massa augue. Quisque id mattis justo. Pellentesque hendrerit eget ligula vel tempus. Mauris eu purus iaculis nisi maximus molestie. Etiam ut turpis velit. Aliquam convallis nisl ipsum, nec suscipit dolor accumsan sit amet. Mauris a lorem eget dui auctor imperdiet id et nunc. Integer rutrum erat pulvinar lacus tempor accumsan. Nunc condimentum urna in hendrerit tincidunt. Aenean porttitor quis ligula ac convallis.',
    visible: false,
  },
  "objviewer": {
    id: 2,
    media: "objviewer.mp4",
    github: "https://github.com/Sztakler/opengl-objectviewer",
    year: '2021',
    category: 'OpenGL & C++',
    title: 'Objviewer',
    description: 'Pellentesque vel tempus enim. Sed nec fermentum sapien. Nam aliquam laoreet velit. Donec at libero sollicitudin, dapibus neque quis, interdum leo. Cras metus nunc, ultrices in sapien pellentesque, imperdiet fermentum turpis. Quisque eget leo sit amet lacus vulputate maximus. Morbi facilisis orci sed volutpat fermentum. Maecenas et massa augue. Quisque id mattis justo. Pellentesque hendrerit eget ligula vel tempus. Mauris eu purus iaculis nisi maximus molestie. Etiam ut turpis velit. Aliquam convallis nisl ipsum, nec suscipit dolor accumsan sit amet. Mauris a lorem eget dui auctor imperdiet id et nunc. Integer rutrum erat pulvinar lacus tempor accumsan. Nunc condimentum urna in hendrerit tincidunt. Aenean porttitor quis ligula ac convallis.',
    visible: false,
  },
  "default": {
    id: 3,
    media: "",
    github: "",
    year: '',
    category: '',
    title: '',
    description: '',
    visible: false,
  },
});

const currentProject = ref(projects.value['default']);

function updateCurrentProject(key) {
  if (currentProject.value === projects.value[key]) {
    currentProject.value.visible = !currentProject.value.visible;
    isProjectExpanded.value = currentProject.value.visible;
  } else {
    currentProject.value.visible = false;
    currentProject.value = projects.value[key];
    currentProject.value.visible = true;
    isProjectExpanded.value = true;
  }
  console.log(isProjectExpanded.value)
}

function resetCurrentProject() {
  currentProject.value = projects.value['default'];
}

const modalVisible = ref(false);

function toggleModal(projectName) {
  updateCurrentProject(projectName);
}

function getMediaSrc() {
  return mediaPrefix + currentProject.value.media;
}

function getProjectGithubLink(key) {
  return projects.value[key].github;
}

function shouldShowProject(index) {
  console.log(
    "aa", 
    index, 
  currentProject.value.id,
  isProjectExpanded.value,
  currentProject.value.id === index,
  !isProjectExpanded.value || currentProject.value.id === index)
  return !isProjectExpanded.value || currentProject.value.id === index;
}
</script>

<template>
  <article>
    <div class="projects" :class="!isProjectExpanded ? 'all-projects-display' : 'single-project-display'">

      <button v-for="(projectName, index) in projectNames" :key="index" class="project" >
        <div class="project-content" v-if="shouldShowProject(index)" @click="toggleModal(projectName)">
          <div class="project-header">
          <span class="project-year">{{ projects[projectName].year }}</span>
          <span class="project-title">{{ projects[projectName].title }}</span>
        </div>
        <span class="project-category">{{ projects[projectName].category }}</span>
        <Transition class="description">
          <span v-if="projects[projectName].visible" class="">{{ projects[projectName].description }}</span>
      </Transition>
        </div>
      </button>
    </div>

    <aside class="media">
      <video :src="getMediaSrc()" autoplay loop preload="auto" />
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
  height: 100%;
}

.projects {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 4;
  transition: all 0.5s ease;
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
  transition: transform 0.5s ease, margin 0.5s ease;
}

.all-projects-display .project {
  margin-bottom: 6rem;

}

.single-project-display .project {
  margin-bottom: 0;
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
  min-width: 48px;
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

.description {
  overflow: hidden;
}

.description-enter-active, .description-leave-active {
  transition: height 0.5s ease;
}

.description-enter-from, .description-leave-to {
  height: 0;
}

.description-enter-to, .description-leave-from {
  height: auto;
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

