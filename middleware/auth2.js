export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Auth2", from.fullPath);
  console.log("Auth2", to.fullPath);

  //   if (to.fullPath === "/events/profile") {
  //     console.log("go to /events");
  //     return navigateTo("/events");
  //   }
});
