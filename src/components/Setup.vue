<script setup>
import { ref, onMounted } from 'vue';
const count = ref(0);
function increment() {
  count.value++;
}

const msg = 'Hello!';

// functions
function log() {
  console.log(msg);
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div>
    <button @click="log">{{ msg }}</button>
    <button @click="increment">{{ count }}</button>
  </div>
</template>
