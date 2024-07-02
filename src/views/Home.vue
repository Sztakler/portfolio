<script>
export default {}
</script>

<template>
  <article>
    <header>
      <h1 class="monumentextended-black">
        <span>Krystian</span>
        <span :class="'subtitle monumentextended-black'">{Designer_and_Developer}</span>
        <span>Jasionek</span>
      </h1>
    </header>
  </article>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

article {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  text-transform: uppercase;
  width: 100%;
}

h1 {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12vw;
  color: #4bb4ff;
  mix-blend-mode: difference;
  filter: invert();
  line-height: 100%;
}

.subtitle {
  all: unset;
  margin: 0;
  font-size: 1.25vw;
  line-height: 80%;
  letter-spacing: 2rem;
}
</style>
