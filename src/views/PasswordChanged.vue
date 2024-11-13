<template>
    <div class="success-container">
    <img src="@/assets/changePassword.png" alt="Success" class="success-image" />
      <h1>¡Contraseña cambiada con éxito!</h1>
      <!-- No me gustaron las estrellas, que opinan? -->
      <!-- Adding stars -->
      <!-- <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
      <div class="star star-4"></div>
      <div class="star star-5"></div>
      <div class="star star-6"></div> -->

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
.success-container h1 {
    margin-top: 0px; 
    font-size: 2.5rem;
}
  .success-container {
    position: relative;
    padding: 20px 0;
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
  
  /* Success Image Styles */
  .success-image {
    width: 40vw; 
    height: auto; 
  }
  
  /* Star Styles */
  .star {
    position: absolute;
    opacity: 0.5; 
    width: 0; 
    height: 0; 
    border-left:  20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
  }
  
  .star-1 {
    top: 10%; 
    left: 15%; 
  }
  
  .star-1:before {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(-35deg);
  }
  
  .star-1:after {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(35deg);
  }
  
  .star-2 {
    top: 20%; 
    left: 75%; 
  }
  
  .star-2:before {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(-35deg);
  }
  
  .star-2:after {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(35deg);
  }
  
  .star-3 {
    top: 30%; 
    left: 40%; 
  }
  
  .star-3:before {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(-35deg);
  }
  
  .star-3:after {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(35deg);
  }
  
  .star-4 {
    top: 50%; 
    left: 10%; 
  }
  
  .star-4:before {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(-35deg);
  }
  
  .star-4:after {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(35deg);
  }
  
  .star-5 {
    top: 70%; 
    left: 80%; 
  }
  
  .star-5:before {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(-35deg);
  }
  
  .star-5:after {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(35deg);
  }
  
  .star-6 {
    top: 60%; 
    right: 15%; 
  }
  
  .star-6:before {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(-35deg);
  }
  
  .star-6:after {
    content: '';
    position: absolute;
    left: -20px; 
    top: 10px;
    border-left: 20px solid transparent; 
    border-right: 20px solid transparent; 
    border-bottom: 35px solid yellow; 
    transform: rotate(35deg);
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


  </style>