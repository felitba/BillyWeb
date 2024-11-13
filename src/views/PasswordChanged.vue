<template>
    <div class="success-container">
    <img src="@/assets/success.png" alt="Success" class="success-image" />
      <h1>¡Contraseña cambiada con éxito!</h1>
      <!-- Adding stars -->
      <div class="star-1"></div>
      <div class="star-2"></div>
      <div class="star-3"></div>
    </div>
  </template>
  
  <style scoped>
  .success-container {
    text-align: center;
    padding: 2rem;
    min-height: 100vh;
    background-color: #8a2be2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: #ffffff;
  }
  
  /* Success Image Styles */
  .success-image {
    width: 30vw; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Space below the image */
  }
  
  /* Star Styles */
  .star-1, .star-2, .star-3 {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: yellow; /* Star color */
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
  
  .star-1 {
    top: 10%; /* Position for star 1 */
    left: 10%; /* Position for star 1 */
  }
  
  .star-2 {
    top: 20%; /* Position for star 2 */
    left: 80%; /* Position for star 2 */
  }
  
  .star-3 {
    top: 70%; /* Position for star 3 */
    left: 50%; /* Position for star 3 */
  }
  
  /* Square Styles */
  .square-1, .square-2 {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: blue; /* Square color */
  }
  
  .square-1 {
    top: 30%; /* Position for square 1 */
    left: 20%; /* Position for square 1 */
  }
  
  .square-2 {
    top: 60%; /* Position for square 2 */
    left: 70%; /* Position for square 2 */
  }
  
  /* Circle Styles */
  .circle-1, .circle-2 {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red; /* Circle color */
    border-radius: 50%; /* Makes it a circle */
  }
  
  .circle-1 {
    top: 40%; /* Position for circle 1 */
    left: 30%; /* Position for circle 1 */
  }
  
  .circle-2 {
    top: 80%; /* Position for circle 2 */
    left: 40%; /* Position for circle 2 */
  }
  </style>