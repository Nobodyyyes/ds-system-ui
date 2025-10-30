<template>
  <div class="register-container">
    <h1>Регистрация</h1>

    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <input
            v-model="firstName"
            id="firstName"
            type="text"
            placeholder="Введите имя"
            required
        />
      </div>

      <div class="form-group">
        <input
            v-model="lastName"
            id="lastName"
            type="text"
            placeholder="Введите фамилию"
            required
        />
      </div>

      <div class="form-group">
        <input
            v-model="middleName"
            id="middleName"
            type="text"
            placeholder="Введите отчество"
        />
      </div>

      <div class="form-group">
        <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Введите почту"
            required
        />
      </div>

      <div class="form-group">
        <input
            v-model="username"
            id="username"
            type="text"
            placeholder="Введите username"
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

      <button type="submit">Зарегистрироваться</button>

    </form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";

const firstName = ref("");
const lastName = ref("");
const middleName = ref("");
const email = ref("");
const username = ref("");
const password = ref("");

const successMessage = ref("");
const errorMessage = ref("");

const handleRegister = async () => {
  try {
    const response = await axios.post("http://localhost:9090/api/v1/users/register", {
      firstName: firstName.value,
      lastName: lastName.value,
      middleName: middleName.value,
      email: email.value,
      username: username.value,
      password: password.value,
    });

    if (response.status === 200 || response.status === 201) {
      successMessage.value = "Регистрация прошла успешно!";
      errorMessage.value = "";

      firstName.value = "";
      lastName.value = "";
      middleName.value = "";
      email.value = "";
      username.value = "";
      password.value = "";

      setTimeout(() => window.location.href = "/login", 1500)
    }
  } catch (error: any) {
    successMessage.value = "";
    if (error.response?.data?.message) {
      errorMessage.value = `Ошибка: ${error.response.data?.message}`;
    } else {
      errorMessage.value = "Ошибка регистрации! Проверьте данные и попробуйте снова."
    }
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
  color: #fff;
}

.form-group {
  margin-bottom: 16px;
}

input {
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
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
  color: #22c55e;
  text-align: center;
  margin-top: 10px;
}

.error {
  color: #ef4444;
  text-align: center;
  margin-top: 10px;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  color: white;
}
</style>