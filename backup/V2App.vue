<template>
<!--   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">

:root {
  --bg-main-color: #171919;
  --main-color:#2a2c2c;
  --second-dark-color:#1f2020;
  --second-light-color:#828c8c;
  --a-light-color: #2aa5a0;
  --a-dark-color: #1d706d;
  --a-hover-color: #248480;
  --text-light-color:#eef2f1;
  --text-dark-color:#c5d3d3;
  --pre-color:#202828;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  display: block;
  color-scheme: dark;
}

head {
  display: none;
}

body {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  color: var(--text-light-color);
  background-color: var(--bg-main-color);
}

div {
  display: flex;
}

a {
  cursor: pointer;
  text-decoration: none;
}

button {
  cursor: pointer;
}

</style>
