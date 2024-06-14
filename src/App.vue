<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="red-hat-display-semibold">
      <ul>
        <li>
          <a href="/about-me">About_me_</a>
        </li>
        <li>
          <a href="/work">Work_</a>
        </li>
        <li>
          <a href="/contact">Contact_</a>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <header>
      <h1>
        Krystian Jasionek
        <div class="subtitle">{Designer and Developer}</div>
      </h1>
    </header>
  </main>
</template>

<style scoped>
@import "./style.css";

header>nav {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: black;
  text-transform: uppercase;
  font-size: 2.5rem;
}

header>nav>h2 {
  all: unset;
  padding: 0.5rem;
}

header>nav>ul {
  all: unset;
  display: flex;
  justify-self: center;
  gap: 1rem;
}

ul>li {
  all: unset;
  padding: 0.5rem;
}

ul>li>a {
  all: unset;
}

ul>li:hover {
  background-color: white;
  color: black;
}

nav>h2:hover {
  background-color: white;
  color: black;
}

main>header {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  padding: 2rem;
}

main>header>h1 {
  margin: 0;
  padding: 0;
  font-size: 7.5vw;
  font-family: "Noto Sans Mono", monospace;
  font-weight: 900;
  font-style: normal;
  position: relative;
  color: darkred;
  mix-blend-mode: difference;

}

.subtitle {
  all: unset;
  margin: 0;
  font-size: 1.5vw;
  position: absolute;
  left: 20%;
  top: 35%;
  color: white;
}
</style>
