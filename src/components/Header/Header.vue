<template>
  <div class="header__banner">
    <div class="header__banner_item container">
      <!--  <img src="./img/gifpk.png" alt="" class="header__banner_bg"> -->
      <p class="header__content_text">
        ARNEEL WEB STUDIO - Разработка web-сайтов, <span>CRM-система,</span>
        <span>SEO продвижение</span>
      </p>
      <img src="../../assets/img/gifpk.png" alt="" class="gifpk" />
      <p class="header__content_text texts">
        Если вашего бизнеса ещё нет в интернете, доверьте эту задачу команде
        <span>Arnel Web Studio</span> . Мы успешно запустили более
        <span>30</span> проектов из разных ниш, поможем стартовать и вам.
      </p>
      <RouterLink to="/" @click="closeModal = !closeModal" class="header__btn sizar btn">Заказать</RouterLink>
      <RouterLink to="/portfolio" class="header__btn btn sizar">Портфолио</RouterLink>

      <div class="header__btns"></div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { closeModal } from '../../modalStore.js';
</script>

<style lang="scss" scoped></style>
