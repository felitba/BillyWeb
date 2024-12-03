<template>
    <div class="profile-share-container">
      <h1>¡Perfil agregado!</h1>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      const invitationId = urlParams.get('invitationId');
  
      if (invitationId) {
        window.location.href = `billy://profile?invitationId=${invitationId}`;
      } else {
        document.body.innerHTML = '<h1>Invalid invitation link.</h1>';
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-share-container {
    text-align: center;
    background-color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  </style>