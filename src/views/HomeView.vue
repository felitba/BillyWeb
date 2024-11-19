<script setup>
import Download from '@/components/Download.vue';
</script>

<template>
  <main class="home">
    <section class="welcome-section">
    <div class="text-container">
        <h2>¡Bienvenido/a a Billy!</h2>
      </div>
    </section>
   
    <div class="outer-container">
      <div class="benefits-container">
        <section class="benefits-section">
          <div class="text-container">
            <h2>Gestioná tus gastos de manera <strong class="highlight-text">fácil</strong> y <strong class="highlight-text">eficiente</strong>.</h2>
            <p>Ya sea para tus registros personales o en grupo, Billy usa inteligencia artificial para categorizar automáticamente tus movimientos y dividir deudas al instante. ¡Olvídate del estrés de las finanzas y deja que Billy lo haga por ti!</p>
            <Download platforms="android" />
          </div>
          <div class="image-container">
            <img src="/Users/mactrucho/Downloads/BillyWeb/src/assets/billy/billy-start.png" alt="Beneficios" />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.outer-container {
  background-color: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.benefits-section {
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-top: 40px;
  background-color: #ffffff;
  padding: 20px;
}

.text-container {
  flex: 1;
  padding-right: 20px;
}

.image-container {
  flex: 1;
  width: 100%;
}

.image-container img {
  width: 60%;
  height: auto;
  border-radius: 8px;
  max-width: 100%;
}

.benefits-section h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

.benefits-section p {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.highlight-text {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #7957eb;
}

.welcome-section {
    padding: 2px; 
}

.welcome-section h2 {
    font-size: 56px;
}

.benefits-container {
  margin-bottom: 20px;
  background-color: #7957eb;
}
</style>
