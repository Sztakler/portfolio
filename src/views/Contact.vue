<script>
export default {}
</script>

<template>
  <article>
    <header>
      <h2>If you want to have a talk with me or take a look at my projects, feel free to
        reach out on these
        platforms:</h2>
    </header>
    <address>
      <div class="socials">
        <a href="mailto:krystian.jasionek@protonmail.com">
          <p>
            <i class="fa-regular fa-envelope"></i> krystian.jasionek@protonmail.com
          </p>
        </a>
        <a href="https://github.com/Sztakler" target="_blank">
          <p><i class="fab fa-github"></i> Metarth</p>
        </a>
      </div>

      <footer>
        <h2>I currently live in:</h2>
        <a href="https://www.openstreetmap.org/#map=12/51.1264/16.9488" target="_blank">
          <p><i class="fa-regular fa-map"></i> Wrocław, Poland</p>
        </a>
      </footer>
    </address>
  </article>
</template>

<style scoped>
@import "../style.css";



address {
  font-size: 1.2rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

footer {
  font-size: 1.2rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

p {
  margin: 0;
}

a {
  text-decoration: underline;
  color: inherit;
  font-style: normal;
}

a:hover {
  opacity: 70%;
}
</style>
