<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink :to="{ name: 'events' }">Events</NuxtLink>
      <NuxtLink to="/events/profile">Profile</NuxtLink>
    </header>
    <NuxtPage />
  </div>
</template>
