<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
import { RouterView } from "vue-router";
</script>
