<template>
  <nav class="header">
    <div class="container header__container">
      <div
        class="burger-menu"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <RouterLink to="/" class="logo">AWS</RouterLink>

      <Transition name="bounce">
        <ul class="menu__list menulist" :class="{ open: isMenuOpen }">
          <li class="menu__item">
            <RouterLink
              to="/"
              :class="{ active: $route.path === '/' }"
              class="menu__link"
              @click="isMenuOpen = false"
            >
              Главная
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink
              to="/portfolio"
              :class="{ active: $route.path === '/portfolio' }"
              class="menu__link"
              @click="isMenuOpen = false"
            >
              Портфолио
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink
              to="/contacts"
              :class="{ active: $route.path === '/contacts' }"
              class="menu__link"
              @click="isMenuOpen = false"
            >
              Контакты
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink
              to="/price"
              :class="{ active: $route.path === '/price' }"
              class="menu__link"
              @click="isMenuOpen = false"
            >
              Цены
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink
              to="/"
              @click="(closeModal = !closeModal), (isMenuOpen = false)"
              class="menu__link"
            >
              Обратная связь
            </RouterLink>
          </li>
          <div class="contacts">
            <div class="social">
        <a href="https://t.me/arneeI_studio" class="iii"
          ><img src="../../assets/img/telegram_.png" alt="tg" class="iii"
        /></a>
        <a
          href="https://instagram.com/arneel_studio?igshid=YmMyMTA2M2Y="
          class="iii"
          ><img
            src="../../assets/img/Instagram_icon-icons.com_66804.png"
            alt="insta"
            class="iii"
        /></a>
        <a
          href="https://github.com/DayelMan"
          class="iii"
          ><img
            src="../../assets/img/github_git_icon_145985.png"
            alt="github"
            class="iii"
        /></a>
        <a
          href="tel:+998334820014"
          class="iii"
          ><img
            src="../../assets/img/phonecall.png"
            alt="numberphone"
            class="iii"
        /></a>
      </div>
          </div>
        </ul>
      </Transition>
      <nav class="menu">
        <div class="call">
          <p class="footer__item_call cage">
            <a href="tel:+998917740014">+998917740014</a>
          </p>
        </div>
      </nav>
      <button @click="closeModal = !closeModal" class="header_btn siza btn iu">
        Заказать
      </button>
    </div>
  </nav>

  <Form v-show="closeModal" />
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Form from "../../form-lesson/form.vue";
import { closeModal } from "../../modalStore.js";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
