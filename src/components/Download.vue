
<template>
  <div>
    <button v-if="platforms === 'android'" @click="downloadApp('android')">Descargar para Android</button>
    <button v-if="platforms === 'ios'" @click="downloadApp('ios')">Descargar para iOS</button>
  </div>
</template>

<script setup>
const props = defineProps(['platforms']);

function downloadApp(platform) {
  if (platform === 'android') {
    window.open('link_to_android_app', '_blank');
  } else if (platform === 'ios') {
    window.open('link_to_ios_app', '_blank');
  }
}
</script>