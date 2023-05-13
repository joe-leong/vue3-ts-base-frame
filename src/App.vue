<script setup lang="ts">
import Test from '@/components/test'
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
const {
  appContext: { app, components }
} = getCurrentInstance() as ComponentInternalInstance
// app.component('HelloWorld', helloWorld)
</script>

<template>
  <Test></Test>
  <RouterView></RouterView>
</template>

<style scoped>
.logo {
  padding: 1.5em;
  height: 6em;
  transition: filter 300ms;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
