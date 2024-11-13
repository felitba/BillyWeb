<template>
  <div class="success-container">
    <img src="@/assets/verifiedEmail.png" alt="Email Verified" style="width: 40vw; height: auto;" /> 
    <h1>¡Email verificado!</h1>
    <!-- Bubbles -->
    <div class="bubble bubble-1"></div>
    <div class="bubble bubble-2"></div>
    <div class="bubble bubble-3"></div>
    <div class="bubble bubble-4"></div>
    <div class="bubble bubble-5"></div>
    <div class="bubble bubble-6"></div>
    <div class="bubble bubble-7"></div>
    <div class="bubble bubble-8"></div>
  </div>
</template>

<style scoped>
.success-container {
  position: relative;
  padding: 0.1rem;
  text-align: center;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #8a2be2;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
}

/* Bubble Styles */
.bubble-1 {
  width: 100px;
  height: 100px;
  background-color: #8a2be2;
  top: 20%;
  left: 10%;
}

.bubble-2 {
  width: 80px;
  height: 80px;
  background-color: #ffcc00;
  top: 50%;
  right: 15%;
}

.bubble-3 {
  width: 60px;
  height: 60px;
  background-color: #ff5733;
  top: 10%;
  left: 30%;
}

.bubble-4 {
  width: 70px;
  height: 70px;
  background-color: #33ff57;
  top: 80%;
  left: 80%;
}

.bubble-5 {
  width: 90px;
  height: 90px;
  background-color: #3357ff;
  top: 70%;
  left: 20%;
}

.bubble-6 {
  width: 50px;
  height: 50px;
  background-color: #ff33a1;
  top: 30%;
  right: 10%;
}

.bubble-7 {
  width: 75px;
  height: 75px;
  background-color: #a133ff;
  top: 60%;
  right: 25%;
}

.bubble-8 {
  width: 85px;
  height: 85px;
  background-color: #33fff5;
  top: 80%;
  left: 10%;
}

h1 {
  font-size: 2.5rem; 
}
</style>
