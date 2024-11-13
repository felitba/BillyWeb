<template>
    <header class="header">
      <img src="@/assets/billy/logo1.png" alt="Logo" class="logo" />
      <h1 class="app-name">Billy</h1>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #f8f9fa; 
  }
  
  .logo {
    width: 40px;
    height: auto;
    margin-right: 16px; 
  }
  
  .app-name {
    font-size: 24px;
    color: #333;
  }
  </style>