<script setup lang="ts">
import { ref } from 'vue'
import { keysApi } from '../api/keysApi';

const userId = '3ce9752b-3496-4994-acd7-205a5977fd42'
const publicKey = ref<string>('')

const loadKey = async () => {
    const response = await keysApi.getPublicKeyByUserId(userId)
    publicKey.value = response.data
}
</script>

<template>
    <div class="p-4">
        <h2 class="text-lg font-bold mb-2">Ваш публичный ключ</h2>
        <button @click="loadKey" class="bg-blue-600 text-white px-4 py-2 rounded">
            Загрузить ключ
        </button>

        <pre v-if="publicKey" class="mt-3 bg-gray-100 p-2 rounded">
            {{ publicKey }}
        </pre>
    </div>
</template>