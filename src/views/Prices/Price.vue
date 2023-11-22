<template>
  <section class="section">
    <div class="price container">
      <h1 class="price_text">
        Итоговая стоимость разработки сайта складывается от требований заказчика
        выясненные на этапе обсуждения. При расчёте конечной стоимости
        учитываются сложность дизайна и функционала.
      </h1>
      <img src="../../assets/img/price-bg.png" alt="" class="price-bg" />
      <swiper
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="price__card">
            <div class="price__card-top">
              <h2 class="price__card-top-title">Услуги</h2>
              <h2 class="price__card-top-name-service">Landing page</h2>
              <h2 class="price__card-top-price">от <span>300$</span></h2>
              
            </div>
            <div class="price__card-bottom">
              <ul class="price__card-bottom-item">
                <li class="price__card-bottom-item-items">
                  Уникальность landing page в том, что вы можете ставить перед
                  ним разноплановые задачи
                </li>
                <li class="price__card-bottom-item-items">
                  Продать товар или услугу
                </li>
                <li class="price__card-bottom-item-items">
                  Скачать приложение, книгу, курс, документ, чтобы получить
                  контакт потенциальных клиентов
                </li>
                <li class="price__card-bottom-item-items">
                  Собрать людей для любого формата мероприятия
                </li>
                <li class="price__card-bottom-item-items">
                  Привлечь аудиторию для вебинара
                </li>
                <li class="price__card-bottom-item-items">
                  Разместить ограниченное мощное предложение
                </li>
                <li class="price__card-bottom-item-items">
                  Узнаваемость бренда
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="price__card">
            <div class="price__card-top">
              <h2 class="price__card-top-title">Услуги</h2>
              <h2 class="price__card-top-name-service">Корпоративный сайт</h2>
              <h2 class="price__card-top-price">от <span>480$</span></h2>
            </div>
            <div class="price__card-bottom">
              <ul class="price__card-bottom-item">
                <li
                  class="price__card-bottom-item-items"
                  aria-label="Помогает вашим клиентам и посетителям быстро и с комфортом найти у вас нужную информацию и заказать консультацию, товар или услугу в широком аспекте"
                >
                  Создание представления
                </li>
                <li class="price__card-bottom-item-items">
                  Люди делают всю работу за вас
                </li>
                <li class="price__card-bottom-item-items">
                  Сопровождение сайта адекватной SEO-оптимизацией
                </li>
                <li class="price__card-bottom-item-items">
                  Сильная конкуренция
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="price__card">
            <div class="price__card-top">
              <h2 class="price__card-top-title">Услуги</h2>
              <h2 class="price__card-top-name-service">Интернет магазин</h2>
              <h2 class="price__card-top-price">от <span>650$</span></h2>
            </div>
            <div class="price__card-bottom">
              <ul class="price__card-bottom-item">
                <li class="price__card-bottom-item-items">
                  Продавайте, даже когда отдыхаете
                </li>
                <li class="price__card-bottom-item-items">
                  Учет наличия товаров
                </li>
                <li class="price__card-bottom-item-items">
                  Создадите своим клиентам виртуальный комфорт
                </li>
                <li class="price__card-bottom-item-items">
                  Дайте своим клиентам свободный выбор
                </li>
                <li class="price__card-bottom-item-items">
                  Собирайте звездочки каждому товару
                </li>
                <li class="price__card-bottom-item-items">
                  Станьте любимцем своих клиентов
                </li>
                <li class="price__card-bottom-item-items">
                  Высокий статус бизнеса перед конкурентами
                </li>
                <li class="price__card-bottom-item-items">Расслабьтесь</li>
                <li class="price__card-bottom-item-items">
                  Без каких-либо плохих клиентов
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from 'vue'
 
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};

const openPrice = ref(true);
</script>

<style lang="scss" scoped></style>
