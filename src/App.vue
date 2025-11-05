<template>
  <div id="app" class="app-wrapper bg-gray-900 text-gray-100">

    <header class="bg-blue-600 text-white py-4 shadow">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 class="text-2xl font-semibold">Система электронной подписи</h1>
      </div>
    </header>

    <main class="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
      <RouterView/>
    </main>

    <footer class="text-center py-4 text-sm text-gray-500 border-t mt-8 w-full">
      &copy; 2025 Система ЭЦП. Все права защищены.
    </footer>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  flex: 1;
}
</style>
