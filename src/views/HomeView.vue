<script setup>
import Download from '@/components/Download.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <main class="home">
    <Header />
    <section class="intro">
      <h2>Bienvenido a Billy</h2>
      <p>Billy es la app definitiva para gestionar tus gastos de manera fácil y eficiente. Ya sea para tus registros personales o en grupo, Billy usa inteligencia artificial para categorizar automáticamente tus movimientos y dividir deudas al instante. ¡Olvídate del estrés de las finanzas y deja que Billy lo haga por ti!</p>
    </section>

    <section class="download-section">
      <Download platforms="android" />
      <Download platforms="ios" />
    </section>
  </main>
</template>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  padding: 20px;
  text-align: center;
}

.intro {
  margin: 20px 0;
}

.intro h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

.intro p {
  font-size: 18px;
  color: #555;
}

.download-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
</style>
