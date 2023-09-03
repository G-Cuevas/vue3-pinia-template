<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconPinia from './shared/components/icons/IconPinia.vue';

</script>

<template>    
  <div class="wrapper">
    <IconPinia />
    <h3>Pinia - Ejercicios</h3>

    <nav>
      <RouterLink to="/counter-options">Counter Options</RouterLink>
      <RouterLink to="/counter-setup">Counter Setup</RouterLink>
      <RouterLink to="/producers">Productores</RouterLink>
    </nav>
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style>

.wrapper {
  min-height: 100vh;
}

.content {
  min-width: 100%;
}

.logo {
  display: flex;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
