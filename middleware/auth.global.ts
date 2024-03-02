export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Переход с:", from.fullPath);
  console.log("Переход на:", to.fullPath);
});
