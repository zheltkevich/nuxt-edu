<script setup lang="ts">
// const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counter = useCounter();
</script>

<template>
  <div>
    <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter id="counter" />
  </div>
</template>
