<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';

const visitorCount = ref(0);

const incrementVisitorCount = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const { ip } = await response.json();
    
    const today = new Date().toISOString().split('T')[0];
    
    await supabase
        .from('Visitors')
        .insert([
            { ip_address: ip, visit_date: today }
        ]);
    
    const { count } = await supabase
      .from('visitors')
      .select('*', { count: 'exact' });
      
    visitorCount.value = count;
    
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};

onMounted(() => {
  incrementVisitorCount();
});
</script>

<template>
  <div class="visitor-counter">
    <p>Visitantes: {{ visitorCount }}</p>
  </div>
</template>

<style scoped>
.visitor-counter {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(121, 87, 235, 0.9);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

@media (max-width: 768px) {
  .visitor-counter {
    bottom: 10px;
    right: 10px;
    font-size: 0.8rem;
  }
}
</style>