<script setup>
import Download from '@/components/Download.vue';
</script>

<template>
  <main class="home">
    <div class="outer-container">
      <section class="welcome-section">
        <div class="banner">
          <h2>¡Billy: La app de finanzas revolucionaria!</h2>
          <Download platforms="android" />
        </div>
      </section>

      <div class="benefits-container">
        <section class="benefits-section">
          <div class="text-container">
            <h2>Gestioná tus gastos de manera <strong class="highlight-text">fácil</strong> y <strong
                class="highlight-text">eficiente</strong>.</h2>
            <p>Separación en categorías, estadísticas, calendario...¡olvidate del estrés de las finanzas y dejá que Billy lo
              haga por vos!</p>
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
            <h2>Billy usa <strong class="highlight-text">inteligencia artificial</strong> para categorizar tus
              gastos <strong class="highlight-text">automáticamente</strong>.</h2>
            <p>¡Tus movimientos al instante de manera individual o grupal... todo es posible en Billy!</p>
          </div>
        </section>
      </div>
    </div>

    <div class="outer-container">
      <div class="benefits-container">
        <section class="benefits-section2">
          <Download platforms="android" class="centered-button" />
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  text-align: center;
  overflow-x: hidden;
}

.outer-container {
  background-color: rgba(121, 87, 235, 0.1);
  padding: 0rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefits-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.benefits-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 3rem;
  width: 80%;
  max-width: 1200px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  gap: 3rem;
}

.benefits-section2 {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 3rem;
  width: 80%;
  max-width: 1200px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}

.text-container {
  flex: 1;
  text-align: left;
  padding: 1rem;
}

.image-container {
  flex: 1;
  max-width: 45%;
  height: auto;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: scale(1.02);
}

.benefits-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #333;
}

.benefits-section p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
}

.highlight-text {
  color: #7957eb;
  font-weight: bold;
}

.welcome-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.banner {
  background: linear-gradient(135deg, #7957eb 0%, #6246ea 100%);
  color: white;
  padding: 3rem;
  border-radius: 30px;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: 2rem auto;
}

.banner h2 {
  font-size: 3rem;
  margin: 0;
}

.centered-button {
  display: block;
  margin: 0 auto;
  padding: 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.welcome-section,
.benefits-section {
  animation: slideIn 0.5s ease-out;
}

@media (max-width: 768px) {
  .benefits-section {
    flex-direction: column;
    padding: 2rem;
    width: 90%;
  }

  .image-container {
    max-width: 80%;
    margin: 1rem 0;
  }

  .banner {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 90%;
  }

  .banner h2 {
    font-size: 2rem;
  }

  .benefits-section2 {
    width: 90%;
  }
}
</style>