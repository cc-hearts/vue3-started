<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #121212;
  color-scheme: dark;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: rgb(13, 148, 136);
  opacity: 0.75;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
</style>
