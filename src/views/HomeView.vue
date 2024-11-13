<script setup>
import Download from '@/components/Download.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <main>
    <Header />
    <p>Billy es un gestor de movimientos, ayudando a gestionar tus tareas de manera eficiente.</p>
    
    <Download platforms="android" />
    <Download platforms="ios" />
  </main>
</template>
