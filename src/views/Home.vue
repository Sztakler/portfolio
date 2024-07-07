<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const textStyle = ref({
  transform: 'rotateY(0deg) rotateX(0deg)',
  transition: 'transform 0.1s',
});

let animationFrameId = 0;

const updateTransform = (xAxis, yAxis) => {
  textStyle.value = {
    transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
    transition: 'transform 0.1s',
  };
};

function mouseMove(event) {
  const xAxis = (window.innerWidth / 2 - event.clientX) / 50;
  const yAxis = (window.innerHeight / 2 - event.clientY) / 50;

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  animationFrameId = requestAnimationFrame(() => {
    updateTransform(xAxis, yAxis);
  });
}

onMounted(() => {
  window.addEventListener('mousemove', mouseMove);
})

onUnmounted(() => {
  window.removeEventListener('mousemove', mouseMove);

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
})
</script>

<template>
  <article>
    <header>
      <h1 class="monumentextended-black" @mousemove="mouseMove" :style="textStyle">
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
  transform-style: preserve-3d;
  transition: transform 0.1s;
}


.subtitle {
  all: unset;
  margin: 0;
  font-size: 1.25vw;
  line-height: 80%;
  letter-spacing: 2rem;
}


@media (max-width: 768px) {
  .subtitle {
    width: 100px;
    letter-spacing: unset;
  }
}
</style>
