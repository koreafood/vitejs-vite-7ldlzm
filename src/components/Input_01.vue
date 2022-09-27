<script setup>
import { ref, onMounted } from 'vue';
const message = ref('init message');

// lifecycle hooks
onMounted(() => {
  message.value = 'set value meeage';
});
</script>

<template>
  <div>
    <span>Input_01.vue</span>
    <span v-bind:title="message"> {{ message }}</span>
  </div>
</template>
