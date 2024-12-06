<template>
  <div class="download-buttons">
    <button
      v-if="platforms === 'android'"
      @click="downloadApp('android')"
      class="download-btn android"
    >
      Descargar para Android
    </button>
    <button
      v-if="platforms === 'ios'"
      @click="downloadApp('ios')"
      class="download-btn ios"
    >
      Descargar para iOS
    </button>
  </div>
</template>

<script setup>
const props = defineProps(['platforms']);

function downloadApp(platform) {
  if (platform === 'android') {
    const link = document.createElement('a');
    link.href = '/Billy.apk';
    link.download = 'Billy.apk';
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (platform === 'ios') {
    window.open('link_to_ios_app', '_blank');
  }
}
</script>

<style scoped>
.download-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.download-btn {
  padding: 40px 80px;
  font-size: 26px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.download-btn:hover {
  transform: scale(1.05);
}

.android {
  background-color: rgba(121, 87, 235, 0.9);
  color: white;
}

.android:hover {
  background-color: rgba(121, 87, 235, 0.5);
}

.ios {
  background-color: #4cd137;
  color: white;
}

.ios:hover {
  background-color: #3c9d2f;
}

@media (max-width: 768px) {
  .download-btn {
    padding: 20px 40px; /* Reduced padding */
    font-size: 18px; /* Reduced font size */
  }
}
</style>
