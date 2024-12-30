<template>
<!--   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">

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
  color: $text-light-color;
  background-color: $bg-main-color;
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
