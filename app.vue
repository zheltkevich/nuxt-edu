<template>
  <NuxtLayout>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink :to="{ name: 'events' }">Events</NuxtLink>
      <NuxtLink to="/events/profile">Profile</NuxtLink>
      <NuxtLink to="/custom">Custom</NuxtLink>
      <NuxtLink to="/vueuse">Vueuse</NuxtLink>
      <NuxtLink to="/counter">Counter</NuxtLink>
    </header>
    <NuxtPage />
  </NuxtLayout>
</template>
