<script>
export default {}
</script>

<template>
  <header>
    <h1 class="monumentextended-black">
      <RouterLink>Krystian Jasionek</RouterLink>
      <div class="subtitle monumentextended-black">{Designer and Developer}</div>
    </h1>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}


main>header {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  padding-left: 5rem;
  position: absolute;
  top: 1rem;
}

main>header>h1 {
  margin: 0;
  padding: 0;
  font-size: 6.5vw;
  position: relative;
  color: #FFCAC9;
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
  color: #FFCAC9;
}
</style>
