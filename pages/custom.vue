<script setup>
definePageMeta({
  layout: "custom",
});

const { sayHello } = useUtils();

sayHello();
</script>

<template>
  <div>CUSTOM PAGE</div>
</template>
