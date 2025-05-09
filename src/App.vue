<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const checkRoute = computed(() => route.path);

const scrollToTop = () => window.scrollTo(0, 0);

onMounted(() => {
  watch(checkRoute, scrollToTop);
});
</script>

<style lang="scss" scoped></style>
