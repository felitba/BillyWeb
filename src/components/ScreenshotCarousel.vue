<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  screenshots: {
    type: Array,
    required: true,
    default: () => []
  }
});

const currentIndex = ref(0);
const autoPlayInterval = ref(null);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.screenshots.length;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? props.screenshots.length - 1 : currentIndex.value - 1;
};

onMounted(() => {
  autoPlayInterval.value = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
  }
});
</script>

<template>
  <section class="carousel-section">
    <h2>Conocé Billy</h2>
    <div class="carousel">
      <button class="carousel-button prev" @click="prevSlide">❮</button>

      <div class="carousel-container">
        <transition-group name="slide">
          <img v-for="(src, index) in screenshots" :key="src" :src="src" v-show="index === currentIndex"
            class="carousel-image" alt="Screenshot de Billy" />
        </transition-group>
      </div>

      <button class="carousel-button next" @click="nextSlide">❯</button>
    </div>

    <div class="carousel-dots">
      <span v-for="(_, index) in screenshots" :key="index" :class="['dot', { active: index === currentIndex }]"
        @click="currentIndex = index"></span>
    </div>
  </section>
</template>

<style scoped>
.carousel-section {
  background-color: #fff;
  padding: 3rem;
  width: 80%;
  max-width: 1200px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(121, 87, 235, 0.8);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s;
}

.carousel-button:hover {
  background: rgba(121, 87, 235, 1);
}

.carousel-button.prev {
  left: -20px;
}

.carousel-button.next {
  right: -20px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background: #7957eb;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .carousel-container {
    height: 400px;
  }

  .carousel-button {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }

  .carousel-section {
    width: 90%;
    padding: 1.5rem;
  }
}
</style>