<script setup>
const { sayHello } = useUtils();

sayHello("index page");
</script>

<template>
  <div>
    <Header />
    <Blocks.Alert />
    <Profile />
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
