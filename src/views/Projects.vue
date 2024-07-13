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
    description: [
      `A friend and I once discussed apps for preparing for the driver's license exam. Most of them seemed outdated, offered little, and worst of all, required payment. We both agreed that it didn't have to be this way. Seeking a solution, we enlisted the help of a friend studying Graphic Design. Together, we set out to create something fresh, modern, and completely free for everyone.`,
      `Our collaboration resulted in a sleek, user-friendly app featuring a training mode, a realistic simulation of the theoretical exam, a comprehensive textbook, and a user profile to track progress and revisit challenging questions. This project also served as the centerpiece of my diploma thesis, reflecting our dedication to enhancing the user experience.`,
    ],
    visible: false,
  },
  "vagabondoro": {
    id: 1,
    media: "vagabondoro.webm",
    github: "https://github.com/Sztakler/vagabondoro-timer",
    year: '2024',
    category: 'Web Design & Development',
    title: 'Vagabondoro Timer',
    description: [
`Seeking a solution for managing my work time and tasks, I developed an application to refine my skills in TypeScript and Vue. Inspired by the minimalist style of a Vagabond manga panel and the serene Kanagawa theme of Neovim, the app aims to minimize distractions and boost productivity.
`,
`Key features include effortless task list editing, task prioritization, and a dedicated timer that tracks "pomos" (pomodoro sessions). The timer seamlessly transitions between work sessions and breaks, prompting a long break after four pomos. Users can estimate task completion times and manage tasks with ease, including hiding completed tasks for enhanced focus.
`,
`Designed with mobile usability in mind, the app ensures a responsive experience across devices.`,
  ],
    visible: false,
  },
  "objviewer": {
    id: 2,
    media: "objviewer.mp4",
    github: "https://github.com/Sztakler/opengl-objectviewer",
    year: '2021',
    category: 'OpenGL & C++',
    title: 'Objviewer',
    description: [
      `During my time at the University of Wroclaw studying computer science, I enrolled in a computer graphics course that significantly expanded my technical skill set. I gained foundational knowledge in GPU pipelines and OpenGL, as well as the principles of computer representation of models, textures, and lighting. Additionally, I delved into the mathematics behind projections, rotations, cameras, and reflections.`,
      `As part of the course, I completed three programming projects that allowed me to apply what I had learned. One notable project was the development of a program for displaying 3D models saved in the .obj format. This program showcased my ability to render textures, including procedural ones, and supported various lighting and reflection models. It also featured an arcball camera, enabling users to interactively observe the model from different angles.`,
    ],
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
  return !isProjectExpanded.value || currentProject.value.id === index;
}

function enter(el) {
  el.style.height = '0';
  setTimeout(() => {
    el.style.height = el.scrollHeight + 'px';
  });
}

function leave(el) {
  el.style.height = el.scrollHeight + 'px';
  setTimeout(() => {
    el.style.height = '0';
  });
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
        <Transition class="description" name="description" @enter="enter" @leave="leave">
          <span class="collapsible-span" v-if="projects[projectName].visible">
            <p v-for="(paragraph, index) in projects[projectName].description" :key="index">{{ paragraph }}</p>
            <a class='github-link' :href="projects[projectName].github" target="_blank">> See on Github</a>
          </span>
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

p {
  margin-bottom: 1rem;
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
  line-height: 120%;
}

.project-category {
  font-size: 1rem;
  align-self: flex-end;
  margin-bottom: 1rem;
  align-self: flex-start;
  max-width: unset;
  font-weight: 100;
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

.description-enter-active, .description-leave-active {
  transition: height 0.5s ease;
}

.description-enter-from, .description-leave-to {
  height: 0;
  overflow: hidden;
}

.project-info {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.github-link {
  text-decoration: underline;
  color: inherit;
  font-style: normal;
  font-weight: 600;
}

.github-link:hover {
  opacity: 80%;
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
    font-size: 0.8rem;
    margin-top: 0.4rem;
    min-width: 32px;
  }

  .project-category {
    font-size: 0.8rem;
  }
}


@media (max-width: 768px) {

  .description {
  font-size: 0.8rem;
  max-width: 60ch;
  }

  .project-year {
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }

  aside {
    display: none;
  }

  .all-projects-display .project {
  margin-bottom: 3rem;

}
}



@media (max-width: 380px) {
.project-title {
  font-size: 1.5rem;
}
}
</style>

