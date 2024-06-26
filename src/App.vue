<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="red-hat-display-semibold">
      <ul>
        <li>
          <RouterLink to="/about-me">About_me_</Routerlink>
        </li>
        <li>
          <RouterLink to="/projects">Projects_</Routerlink>
        </li>
        <li>
          <RouterLink to="/contact">Contact_</Routerlink>
        </li>
      </ul>
    </nav>
  </header>


  <main>
    <header>
      <!-- <h1 class="monumentextended-black"> -->
        <!-- <RouterLink to="/" active-class="home-link-active" class="home-link"> -->
          <!-- Krystian Jasionek -->
          <!-- <div class="subtitle monumentextended-black">{Designer and Developer}</div> -->
        <!-- </RouterLink> -->
      <!-- </h1> -->
    </header>
    <section id="router-view-section">
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
@import "./style.css";

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}


header>nav {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 2.5rem;
}


header>nav>ul {
  all: unset;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

li {
  all: unset;
  padding: 0.5rem;
  background-color: #e9fafc00;
  transition: opacity 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
}

li>a {
  all: unset;
  cursor: pointer;
}


ul>li:hover {
  background-color: #e9fafc88;
}

ul>li:active {
  opacity: 70%;
}

.router-link-active {
  position: relative;
}

.router-link-active::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
}

.home-link {
  transition: color 0.1s ease-in-out;
}


.home-link:hover {
  color: #aaaaaa;
  cursor: pointer;
}

.home-link:active {
  opacity: 60%;
}

.home-link-active {
  all: unset;
}

.home-link-active::after {
  display: none;
}

main {
  display: flex;
  justify-content: space-between;
}

main>header {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  padding-left: 5rem;
  position: absolute;
  top: 1rem;
  max-width: 25%;
}



main>header>h1 {
  margin: 0;
  padding: 0;
  font-size: 6.5vw;
  position: relative;
  color: #EA9385;
  mix-blend-mode: difference;
  filter: invert();
  line-height: 100%;
  height: 100%;
  width: fit-content;
}

.subtitle {
  all: unset;
  margin: 0;
  font-size: 1.5vw;
  position: absolute;
  left: 85%;
  top: 0;
}

#router-view-section {
  position: fixed;
  background-color: rgb(22, 22, 22);
  left: 30%;
  top: 20%;
  padding-right: 5rem;
}
</style>
