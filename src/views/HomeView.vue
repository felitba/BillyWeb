<script setup>
import Download from '@/components/Download.vue';
</script>

<template>
  <main class="home">
    <div class="outer-container">

      <section class="welcome-section">
        <div class="text-container">
          <h2>¡Bienvenido/a a Billy!</h2>
        </div>
      </section>

      <div class="benefits-container">
        <section class="benefits-section">
          <div class="text-container">
            <h2>Gestioná tus gastos de manera <strong class="highlight-text">fácil</strong> y <strong class="highlight-text">eficiente</strong>.</h2>
            <p>¡Olvídate del estrés de las finanzas y deja que Billy lo haga por ti!</p>
          </div>
          <img class="image-container" src="@/assets/billy/billy-signup.png" alt="Beneficios" />
        </section>
      </div>
    </div>

    <div class="outer-container">
      <div class="benefits-container">
        <section class="benefits-section">
          <img class="image-container" src="@/assets/billy/billy-start.jpg" alt="Beneficios" />

          <div class="text-container">
            <h2>Billy usa <strong class="highlight-text">inteligencia artificial</strong> para categorizar <strong class="highlight-text">automáticamente</strong></h2>
            <p>Tus movimientos y dividir deudas al instante.</p>
          </div>
        </section>
      </div>
      <Download platforms="android" />

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
  align-items: center;

}

.benefits-section {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  width: 70%;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.image-container {
  flex: 0 0 auto;
  max-width: 40%;
}

.image-container img {
  width: 25%;
  height: auto;
  border-radius: 8px;
}

.benefits-section h2 {
  font-size: 36px;
  margin-bottom: 5px;
}

.benefits-section p {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;
}

.highlight-text {
  font-size: 48px;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
