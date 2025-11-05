<template>
  <div class="keys-container">
    <h2>Управление ключами</h2>

    <div class="tabs">
      <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: currentTab === tab }"
          @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="currentTab === 'Генерация'">
        <h2>Сгенерировать ключ</h2>
        <button @click="generateKey" class="bg-green-600 text-white px-4 py-2 rounded">
          Создать новый ключ
        </button>
      </div>

      <div v-if="currentTab === 'Список'">
        <h2>Список ключей</h2>
        <ul>
          <li v-for="key in keys" :key="key.id">{{ key.name }}</li>
        </ul>

        <div class="mt-4 p-4 border rounded bg-gray-800">
          <h3 class="text-white mb-2">Ваш публичный ключ</h3>
          <button @click="loadKeys" class="bg-blue-600 text-white px-4 py-2 rounded">
            Загрузить ключ
          </button>
          <pre v-if="publicKey" class="mt-2 bg-gray-100 text-black p-2 rounded">{{ publicKey }}</pre>
        </div>
      </div>

      <div v-if="currentTab === 'Удаление'">
        <h2>Удаление ключей</h2>
        <ul>
          <li v-for="key in keys" :key="key.id">
            {{ key.name }}
            <button @click="deleteKey(key.id)" class="bg-red-600 text-white px-2 py-1 rounded ml-2">
              Удалить
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {keysApi} from '../api/keysApi'

const tabs = ['Генерация', 'Список', 'Удаление']
const currentTab = ref('Генерация')

const keys = ref([])
const publicKey = ref('')
const userId = '4772bb20-1370-4c59-882f-c73a4cbae886'

const generateKey = async () => {
  try {
    await keysApi.generateKeyPair(userId)
    alert("Ключ успешно сгенерирован!")
  } catch (error) {
    alert("Ошибка при генерации ключа!")
  }
}

const loadKeys = async () => {
  try {
    const response = await keysApi.getPublicKeyByUserId(userId)
    keys.value = response.data
  } catch (error) {
    keys.value = []
  }
}
</script>

<style scoped>
.keys-container {
  color: white;
  padding: 20px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs button {
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #374151;
  color: white;
  cursor: pointer;
}

.tabs button.active {
  background-color: #10b981;
}

.tab-content {
  background-color: #1f2937;
  padding: 20px;
  border-radius: 8px;
}
</style>
