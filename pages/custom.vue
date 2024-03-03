<script setup>
definePageMeta({
  layout: "custom",
});

const { sayHello } = useUtils();

sayHello();
</script>

<template>
  <div>
    <h1>CUSTOM PAGE</h1>
  </div>
</template>
