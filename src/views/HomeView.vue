  <script setup>
import Download from '@/components/Download.vue';
import ScreenshotCarousel from '@/components/ScreenshotCarousel.vue';
import VisitorCounter from '@/components/VisitorCounter.vue';
import screenshot1 from '@/assets/screenshots/Screenshot1.jpg';
import screenshot2 from '@/assets/screenshots/Screenshot2.jpg';
import screenshot3 from '@/assets/screenshots/Screenshot3.jpg';
import screenshot4 from '@/assets/screenshots/Screenshot4.jpg';
import { ref, computed, onMounted } from 'vue';

const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4
];

const isMobile = ref(false);

const checkScreenWidth = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

const intelligenceText = computed(() => (isMobile.value ? 'IA' : 'inteligencia artificial'));
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
            <p>Estadísticas, planificaciones en calendario...¡olvidate del estrés de las finanzas y dejá que Billy lo
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
            <h2>Billy usa <strong class="highlight-text">{{ intelligenceText }}</strong> para categorizar <strong
                class="highlight-text">automáticamente</strong>.</h2>
            <p>¡Tus movimientos al instante de manera individual o grupal... todo es posible en Billy!</p>
          </div>
        </section>
      </div>
    </div>

    <div class="outer-container">
      <div class="benefits-container">
        <ScreenshotCarousel :screenshots="screenshots" />
      </div>
    </div>

    <div class="outer-container">
      <div class="benefits-container">
        <section class="benefits-section2">
          <Download platforms="android" class="centered-button" />
        </section>
      </div>
    </div>

    <VisitorCounter />

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
  .home {
    overflow-x: auto;
  }

  .outer-container {
    overflow-x: auto;
  }

  .benefits-section {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    margin: 1rem auto;
    overflow-x: auto;
  }

  .banner {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    width: 100%;
    margin: 1rem auto;
    overflow-x: auto;
  }

  .banner h2 {
    font-size: 4vw;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .text-container {
    text-align: center;
    padding: 0;
    margin: 1rem 0;
  }

  .highlight-text {
    font-size: 4vw;
  }

  h2 {
    font-size: 4vw;
  }

  p {
    font-size: 2.5vw;
  }

  .benefits-section h2,
  .benefits-section2 h2 {
    font-size: 3.5vw;
  }

  .text-container p {
    font-size: 2.5vw;
  }
}
</style>