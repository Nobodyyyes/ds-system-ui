<template>
  <div class="home-container">

    <header class="home-header">
      <h1>Добро пожаловать в систему ЭЦП</h1>
      <p class="subtitle">
        Управляйте своими электронными подписями, документами и ключами.
      </p>
    </header>

    <main class="home-content">
      <div class="card" @click="goTo('/keys/generate')">
        <h2>🧩 Сгенерировать ключ</h2>
        <p>Создайте новый ключ электронной подписи</p>
      </div>

      <div class="card" @click="goTo('/keys/list')">
        <h2>🔑 Просмотр ключей</h2>
        <p>Посмотрите список созданных ключей</p>
      </div>

      <div class="card" @click="goTo('/keys/delete')">
        <h2>🗑️ Удалить ключ</h2>
        <p>Удалите старые или неиспользуемые ключи</p>
      </div>

      <div class="card" @click="goTo('/documents/sign')">
        <h2>✍️ Подписать документ</h2>
        <p>Подпишите файл с помощью ЭЦП</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>✅ Проверить подпись</h2>
        <p>Проверьте подлинность электронной подписи</p>
      </div>

      <div class="card" @click="goTo('/profile')">
        <h2>👤 Профиль</h2>
        <p>Просмотр и редактирование данных пользователя</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>📄 Управление пользователями</h2>
        <p>Просмотр и управление пользователей</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>🔧 Управление ключами и сертификатами</h2>
        <p>Управление ключами и сертификатами</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>📜 Управление шаблонами документов</h2>
        <p>Редактирование шабловнов</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>🔍 История действий</h2>
        <p>Просмотр истории действий</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>⚙️ Настройки системы</h2>
        <p>Настройки системы ЭЦП</p>
      </div>

      <div class="card" @click="goTo('/documents/verify')">
        <h2>📈 Статистика и отчеты</h2>
        <p>Просмотр и генерация отчетов</p>
      </div>
    </main>

    <footer class="home-footer">
      <button class="logout-btn" @click="logout">🚪 Выйти</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const goTo = (path: string) => {
  router.push(path);
}

const logout = () => {
  router.push("/login");
};
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  color: #fff;
  background: linear-gradient(135deg, #1f2937, #526858);
  min-height: 100vh;
  border-radius: 50px;
}

.home-header {
  text-align: center;
  margin-bottom: 40px;
}

.home-header h1 {
  font-size: 2rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  color: #9ca3af;
  margin-top: 8px;
}

.home-content {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 250px;
  background: #374151;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
}

.card:hover {
  background: #4b5563;
  transform: translateY(-4px);
}

.card h2 {
  margin-bottom: 10px;
}

.home-footer {
  margin-top: 40px;
}

.logout-btn {
  background: #ef4444;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.logout-btn:hover {
  background: #dc2626;
}
</style>