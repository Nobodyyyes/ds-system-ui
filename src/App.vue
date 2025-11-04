<template>
  <div id="app" class="min-h-screen bg-gray-900 text-gray-100">

    <header class="bg-blue-600 text-white py-4 shadow">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <h1 class="text-2xl font-semibold">Система электронной подписи</h1>
      </div>
    </header>

    <main class="container mx-auto px-6 py-8">
      <RouterView/>
    </main>

    <footer class="text-center py-4 text-sm text-gray-500 border-t mt-8">
      &copy; 2025 Система ЭЦП. Все права защищены.
    </footer>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
