<template>
    <div class="error-page">
      <h1 v-if="statusCode === 404">Страница не найдена (404)</h1>
      <p v-if="statusCode === 404">Извините, запрашиваемая страница не существует.</p>
      <p v-else>Произошла ошибка! Статус: {{ statusCode }}</p>
      <nuxt-link to="/">Перейти на главную</nuxt-link>
      
    </div>
  </template>
  
  <script setup>
  defineProps({
    statusCode: {
      type: Number,
      required: true,
    }
  })
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    margin-top: 50px;
  }
  </style>