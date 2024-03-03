<script setup>
import { useCounterStore } from "~/stores/myStore";

const store = useCounterStore();
console.log(store);
const { sayHello } = useUtils();

sayHello("index page");

const { $sayHello } = useNuxtApp();

$sayHello(235, "nuxt app");
</script>

<template>
  <div>
    <Header />
    <Blocks.Alert />
    <Profile />
    {{ store.count }}
    <button @click="store.increment">Increment</button>
    <button @click="store.decrement">Decrement</button>
    <button @click="store.reset">Reset</button>
    <div>
      <h1>MAIN page</h1>
      <img class="img" src="@assets/1.png" alt="image from assets dir" />
      <img class="img" src="/2.png" alt="image from publik dir" />
      <Icons.FilesTxt />
    </div>
  </div>
</template>

<style lang="scss">
.img {
  width: 500px;
  max-width: 100%;
}
</style>
