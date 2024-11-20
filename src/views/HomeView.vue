<script setup>
import Download from '@/components/Download.vue';
</script>

<template>
  <main class="home">
    <div class="outer-container">

      <section class="welcome-section">
        <div class="text-container">
          <h2>¡Billy: La app para revolucionar tus finanzas!</h2>
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
            <h2>Billy usa <strong class="highlight-text">inteligencia artificial</strong> para categorizar <strong class="highlight-text">automáticamente.</strong></h2>
            <p>Tus movimientos y dividir deudas al instante.</p>
          </div>
        </section>
      </div>
    </div>

    <div class="outer-container">
      <div class="benefits-container">
        <section class="benefits-section2" style="animation: slideIn 0.5s ease-out;">
          <img class="download-image" src="@/assets/image copy 2.png" />
          <Download platforms="android" />
        </section>
      </div>
    </div> 
 

    

  </main>
</template>
<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.outer-container {
  background-color: rgba(121, 87, 235, 0.4);  /* #f3e5f5 antes estaba asi. */
  padding: 15px;
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
  border-radius: 30px;
}

.benefits-section2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  width: 70%;
  border-radius: 30px;
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
  transition: transform 0.3s ease;
  border-radius: 30px;
}

.image-container img {
  width: 25%;
  height: auto;
}

.image-container:hover {
  transform: scale(1.05);
}

.benefits-section h2 {
  font-size: 36px;
  margin-bottom: 5px;
}

.benefits-section p {
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 10px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

.welcome-section, .benefits-section {
  animation: slideIn 0.5s ease-out;
}

.download-container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.download-image {
  width: 50%;
  height: auto;
}
</style>
