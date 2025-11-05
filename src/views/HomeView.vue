<template>
  <div class="home-container">

    <header class="home-header">
      <h1>Добро пожаловать в систему ЭЦП</h1>
      <p class="subtitle">
        Управляйте своими электронными подписями, документами и ключами.
      </p>
    </header>

    <main class="home-content">
      <div class="card" @click="goTo('/keys')">
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

  padding: 110px; /* или меньше, если нужно компактнее */

  color: #fff;
  background: linear-gradient(135deg, #1f2937, #526858);

  /* блок не растягивается на весь экран */
  width: 90%; /* ширина контейнера */
  max-width: 1000px; /* максимальная ширина */
  margin: 40px auto; /* одинаковый верхний и нижний отступ и центрирование */

  border-radius: 20px; /* скругления */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* тень для визуального выделения */
}


.home-header h1 {
  font-size: 1.8rem; /* чуть меньше */
  font-weight: 700;
}

.subtitle {
  font-size: 1rem; /* меньше */
  color: #9ca3af;
  margin-top: 6px;
}

.home-content {
  display: flex;
  gap: 20px; /* меньше gap */
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px; /* расстояние от заголовка */
  margin-bottom: 50px;
}

.card {
  width: 200px; /* меньше ширина */
  background: #374151;
  border-radius: 12px;
  padding: 16px; /* меньше padding */
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
}

.card:hover {
  background: #4b5563;
  transform: translateY(-2px);
}

.card h2 {
  font-size: 1.1rem; /* чуть меньше */
  margin-bottom: 8px;
}

.home-footer {
  margin-top: auto; /* всегда внизу */
  padding: 20px 0;
}

.logout-btn {
  background: #ef4444;
  border: none;
  padding: 8px 16px;
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