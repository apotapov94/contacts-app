<template>
    <NuxtLayout>
        <div class="error-page">
            <p class="status-code-text" v-if="error.statusCode === 404">{{error.statusCode}}</p>
            <p v-if="error.statusCode === 404">Страница не найдена</p>
            <p v-if="error.statusCode === 404">Извините, запрашиваемая страница не существует.</p>
            <p v-else>Произошла ошибка! Статус: {{ statusCode }}</p>
            <nuxt-link to="/">Перейти на главную</nuxt-link>
        
        </div>
    </NuxtLayout>
  </template>
  
  <script setup>
  defineProps(['error'])
  </script>
  
  <style scoped>
  .error-page {
    margin: 0 auto;
    text-align: center;
    p {
        font-weight: 600;
    }
  }
  .status-code-text {
    font-size: 170px;
    font-weight: 600;
    color: #4B6A9B;
    margin: 0;
  }
  </style>