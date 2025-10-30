<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="text-center mt-10">
        <h2 class="text-3xl font-bold mb-4">Добро пожаловать в систему ЭЦП</h2>
        <p class="text-lg text-gray-600 mb-6">
            Здесь вы можете генерировать, хранить и использовать электронные подписи для документов.
        </p>

        <RouterLink to="/keys" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Перейти к ключам
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
</script>