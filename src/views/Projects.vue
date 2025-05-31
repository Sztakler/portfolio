<script setup>
import { ref, watch } from 'vue';

const isProjectExpanded = ref(false);
const mediaPrefix = "./assets/videos/";
const currentMedia = ref("vagabondoro.jpg");
const projectNames = ['clone', 'curves', 'ale-jazda', 'objviewer', 'lampa', 'vagabondoro', ];
const projects = ref({
  "clone": {
    id: 0,
    media: "clone.webm",
    github: "https://github.com/Sztakler/clone",
    year: '2025',
    category: 'Web Design & Development',
    tags: ['React', 'FastAPI'],
    title: 'Robot Control',
    description: [
      `RobotControl is a full-stack application designed for real-time monitoring and control of a simulated robot. Originally developed as a technical recruitment task for Clone Robotics, it demonstrates the ability to build clean, modular, and testable full-stack applications. The backend is built with FastAPI following a modular architecture and communicates via RESTful HTTP. It includes comprehensive integration tests using pytest and httpx, allowing API validation without the need to run a live server. The application is containerized with Docker for straightforward deployment and scalability.`,
      `The frontend is developed with React and tested using Jest to ensure UI stability and correctness. While the system has WebSocket support prepared for real-time data streaming, it currently relies solely on HTTP to maintain simplicity and robustness. The overall design prioritizes clean separation of concerns, extensibility, and ease of adaptation to real-world robotic systems.`,
    ],
    visible: false,
  },
    "curves": {
    id: 1,
    media: "curves.webm",
    github: "https://github.com/Sztakler/curves",
    year: '2023',
    category: 'Computer Graphics, Algorithms & Mathmatics',
    tags: ['Python', 'Pygame', 'Pygame GUI'],
    title: 'Curves',
    description: [
      `Curves is an interactive graphical application built in Python using Pygame, designed to let users freely manipulate, transform, and animate curves on a digital canvas. It offers a broad set of intuitive tools for working with curves — including rotation, translation, degree modification, splitting, joining, and animation — as well as the ability to display convex hulls. The interface supports both keyboard and mouse input for precise control, and includes full support for loading images, saving/loading canvases, and exporting creations.`,
      `The app supports multiple types of curves: Lagrange, Bézier, Rational Bézier, B-spline, and Spline curves, giving users a flexible playground for both artistic expression and mathematical exploration. What makes Curves really special to me is that all the underlying mathematical structures and algorithms were implemented entirely from scratch — no external geometry libraries involved. Everything is based on what I learned during the Curves and Surfaces in Computer Graphics course at the University of Wrocław. I’m genuinely proud of this project because it combines two things I absolutely love: mathematics and visual creativity. I'm deeply fascinated by the intersection of hard science and visual arts — and building this tool was a full-on passion project that let me dive headfirst into that space.`,
    ],
    visible: false,
  },
  "ale-jazda": {
    id: 2,
    media: "alejazda.webm",
    github: "https://github.com/Sztakler/driver-license-uwr",
    year: '2023',
    category: 'Web Development',
    tags: ['React', 'ExpressJS', 'TailwindCSS'],
    title: 'Ale Jazda!',
    description: [
      `A friend and I once discussed apps for preparing for the driver's license exam. Most of them seemed outdated, offered little, and worst of all, required payment. We both agreed that it didn't have to be this way. Seeking a solution, we enlisted the help of a friend studying Graphic Design. Together, we set out to create something fresh, modern, and completely free for everyone.`,
      `Our collaboration resulted in a sleek, user-friendly app featuring a training mode, a realistic simulation of the theoretical exam, a comprehensive textbook, and a user profile to track progress and revisit challenging questions. This project also served as the centerpiece of my diploma thesis, reflecting our dedication to enhancing the user experience.`,
    ],
    visible: false,
  },
  "objviewer": {
    id: 3,
    media: "objviewer.webm",
    github: "https://github.com/Sztakler/opengl-objectviewer",
    year: '2021',
    category: 'Computer Graphics',
    tags: ['C++', 'OpenGL', 'GLSL'],
    title: 'Objviewer',
    description: [
      `During my time at the University of Wroclaw studying computer science, I enrolled in a computer graphics course that significantly expanded my technical skill set. I gained foundational knowledge in GPU pipelines and OpenGL, as well as the principles of computer representation of models, textures, and lighting. Additionally, I delved into the mathematics behind projections, rotations, cameras, and reflections.`,
      `As part of the course, I completed three programming projects that allowed me to apply what I had learned. One notable project was the development of a program for displaying 3D models saved in the .obj format. This program showcased my ability to render textures, including procedural ones, and supported various lighting and reflection models. It also featured an arcball camera, enabling users to interactively observe the model from different angles.`,
    ],
    visible: false,
  },
  "lampa": {
    id: 4,
    media: "lampa.webm",
    github: "https://github.com/Sztakler/Lampa",
    year: '2024',
    category: 'Web Design & Development',
    tags: ['NuxtJS', "TailwindCSS", 'Figma'],
    title: 'Lampa',
    description: [
      `This summer's heat inspired my friends and me to get creative with ways to lift our spirits during those sweltering days. We started coming up with puns and wordplay to describe the weather, most notably calling high temperatures "lampa" (eng. "lamp"). This sparked the idea for my summer project: a mobile and desktop weather app called "Czy jest dzisiaj lampa?" (eng. "Is it a lamp today?"), designed to describe current conditions with humor.`,
      `I opted for a minimalistic, almost brutalist design in monochrome, using only black and white to eliminate distractions and make the weather details instantly accessible.`,
      `The application was built with NuxtJS and styled using TailwindCSS for fast, scalable development. Initially, I used the OpenWeather API, but I ran into a frustrating bug that made the sunrise and sunset data unreliable. To work around this, I integrated the Sunrise-Sunset API, achieving accurate results.`,
      `The app is still a work in progress. While it functions fully as a weather app, it currently lacks the humorous descriptions I have in mind. If you have any ideas for weather puns, don’t hesitate to send me an email—I’d love to hear them!`
    ],
    visible: false,
  },  "vagabondoro": {
    id: 5,
    media: "vagabondoro.webm",
    github: "https://github.com/Sztakler/vagabondoro-timer",
    year: '2024',
    category: 'Web Design & Development',
    tags: ['VueJS', 'CSS', 'Figma'],
    title: 'vagabondoro',
    description: [
      `Seeking a solution for managing my work time and tasks, I developed an application to refine my skills in TypeScript and Vue. Inspired by the minimalist style of a Vagabond manga panel and the serene Kanagawa theme of Neovim, the app aims to minimize distractions and boost productivity.
`,
      `Key features include effortless task list editing, task prioritization, and a dedicated timer that tracks "pomos" (pomodoro sessions). The timer seamlessly transitions between work sessions and breaks, prompting a long break after four pomos. Users can estimate task completion times and manage tasks with ease, including hiding completed tasks for enhanced focus.
`,
      `Designed with mobile usability in mind, the app ensures a responsive experience across devices.`,
    ],
    visible: false,
  },
  "default": {
    id: 6,
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
const loading = ref(false);

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

function handleLoaded() {
  loading.value  = false;
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

watch(() => currentProject.value.media, () => {
  loading.value = true;
});
</script>

<template>
  <article>
    <div class="projects" :class="!isProjectExpanded ? 'all-projects-display' : 'single-project-display'">
      <button v-for="(projectName, index) in projectNames" :key="index" class="project">
        <div class="project-content" v-if="shouldShowProject(index)" @click="toggleModal(projectName)">
          <div class="project-header">
            <div>
              <span class="project-year">{{ projects[projectName].year }}</span>
              <span class="project-title">{{ projects[projectName].title }}</span>
            </div>
            <span class="chevron" :class="isProjectExpanded ? 'rotate' : ''">></span>
          </div>
          <span class="project-category">{{ projects[projectName].category }}</span>
          <Transition class="description" name="description" @enter="enter" @leave="leave">
            <span class="collapsible-span" v-if="projects[projectName].visible">
              <p v-for="(paragraph, index) in projects[projectName].description" :key="index">{{ paragraph }}</p>
              <div class='tags-container'>
                <div class='tags-title'>Tech stack</div>
                <div class='tags'>
                  <div class="tag-name" v-for="(tag, index) in projects[projectName].tags" :key="index">
                    {{ tag }}
                  </div>
                </div>
              </div>
              <a class='github-link' :href="projects[projectName].github" target="_blank">> See on Github</a>
            </span>
          </Transition>
        </div>
      </button>
    </div>

    <aside class="media">
      <div v-if="loading" class="loader" />
      <video v-show="!loading" @loadeddata="handleLoaded"  :src="getMediaSrc()" autoplay loop preload="auto" />
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
  height: 100%;
}

.projects {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 4;
  transition: all 0.5s ease;
  overflow-y: scroll;
  padding-right: 32px;
}

::-webkit-scrollbar {
  width: 4px;
  background: transparent;
}

::-webkit-scrollbar-track {
  background: transparent; 
}

/* suwak - czarna kreska */
::-webkit-scrollbar-thumb {
  background-color: #808080;
  border-radius: 0;
  border: none;
}

button {
  all: unset;
}

.chevron {
  font-size: 2.5rem;
  display: block;
  transition: transform 0.5s;
  transform: rotate(90deg);
  align-self: flex-start;

}

.rotate {
  transform: rotate(-90deg);
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
  width: 100%;
  transition: transform 0.5s ease, margin 0.5s ease;
}

.all-projects-display .project {
  margin-bottom: 3rem;

}

.single-project-display .project {
  margin-bottom: 0;
}

.project-content {
  width: 100%;

}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.project-header div {
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
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
  margin-top: 1rem;
  width: fit-content;
  min-width: 36px;
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  aspect-ratio: 16/9;
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
  max-width: 60ch;
  display: block;
}

.description-enter-active,
.description-leave-active {
  transition: height 0.5s ease;
}

.description-enter-from,
.description-leave-to {
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

.tags {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tags-title {
  font-weight: 600;
}

.tag-name {
  font-weight: 200;
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
    margin-top: 0.25rem;
    min-width: 28px;
  }

  .project-category {
    font-size: 0.8rem;
  }
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 0; /* ukrywa tekst */
}

.loader::after {
  content: "";
  width: 40px;
  height: 40px;
  border: 5px solid #808080;
  border-top-color: #080808; /* fajny niebieski kolor */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


@media (max-width: 768px) {

  .description {
    font-size: 0.8rem;
  }

  .project-year {
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }

  aside {
    display: none;
  }

  .all-projects-display .project {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 380px) {
  .project-title {
    font-size: 1.5rem;
  }
}
</style>

