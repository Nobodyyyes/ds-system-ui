<template>
  <div class="register-container">
    <h1>Авторизация</h1>

    <form @submit.prevent="handleAuthorization">
      <div class="form-group">
        <input
            v-model="username"
            id="username"
            type="text"
            placeholder="Введите имя пользователя"
            required
        />
      </div>

      <div class="form-group">
        <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Введите пароль"
            required
        />
      </div>

      <button type="submit">Войти</button>
    </form>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <p class="login-link">
      Нету аккаунта?
      <router-link to="/register">Зарегистрироваться</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const username = ref("");
const password = ref("");
const successMessage = ref("");
const errorMessage = ref("");

const handleAuthorization = async () => {
  try {
    const response = await axios.post(
        `http://localhost:9090/api/v1/users/login/username/${username.value}/password/${password.value}`
    );

    if (response.data === true) {
      successMessage.value = "Вход выполнен успешно!";
      errorMessage.value = "";
    } else {
      successMessage.value = "";
      errorMessage.value = "Неверный логин или пароль!";
    }
  } catch (error) {
    successMessage.value = "";
    errorMessage.value = "Ошибка соединения с сервером!";
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #4c4a4a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 24px;
}
.form-group {
  margin-bottom: 16px;
}
input {
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
button {
  width: 70%;
  padding: 10px;
  background-color: #10b981;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #059669;
}
.success {
  color: green;
  text-align: center;
  margin-top: 10px;
}
.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
.login-link {
  text-align: center;
  margin-top: 20px;
}
</style>
