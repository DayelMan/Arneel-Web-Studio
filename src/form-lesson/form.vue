<template>
  <Transition name="bounce">
    <div class="popap" v-show="closeModal ">
      <div class="popap__content">
        <div class="popap__content_close-button">
          <img
            src="../assets/img/close-button.png"
            alt=""
            class="button__close"
          />
        </div>
        <h1 class="popap__content-title">Заявка на консультацию</h1>
        <form @submit="submitForm" class="form container">
          <div class="input_one">
            <label for="user_name" class="form__label">Ваше имя</label>
            <input
              type="text"
              required
              placeholder="Введите ваше имя"
              class="form__input form__input_place"
              v-model="name"
              name="user_name"
            />
          </div>
          <div class="input_one">
            <label for="user_phone" class="form__label">Номер телефона</label>
            <input
              type="number"
              required
              placeholder="+998 33 482 00 14"
              class="form__input form__input_place"
              v-model="phoneInput"
              name="user_phone"
            />
          </div>
          <div class="input_one">
            <label for="user_email" class="form__label"
              >Адрес электронной почты</label
            >
            <input
              type="email"
              required
              placeholder="you@example.com"
              class="form__input form__input_place"
              v-model="email"
              name="user_email"
            />
          </div>
          <div class="input_one">
            <textarea
              name="user_message"
              id=""
              placeholder="Сообщение..."
              class="form__textarea"
              v-model="message"
            ></textarea>
          </div>
          <button @click="closeModal = !closeModal" type="submit" class="form__btn form__btn-text">
            Отправить
          </button>

          <div class="input_one">
            <p class="form__teext">
              Нажимая на кнопку «Отправить заявку», я даю согласие на обработку
              персональных данных и соглашаюсь c
              <span>политикой конфиденциальности</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
<script>
import { closeModal } from "../modalStore.js";
import axios from "axios";


// VALIDATEE

export default {
  data() {
    return {
      name: "",
      phoneInput: "",
      email: "",
      message: "",
    };
  },
  methods: {
    normalizePhone(phone) {
      // нормализация номера телефона, если необходимо
      // например, удаление пробелов, добавление префикса и т.д.
      // вам нужно настроить это согласно требованиям Telegram API
      return phone;
    },
    async submitForm(event) {
      event.preventDefault();

      const phone = this.normalizePhone(this.phoneInput);

      const response = await axios.post(
        `https://api.telegram.org/bot6813584012:AAEfNphBSbv6LJVD_mM8oFT88eGbFubkPV0/sendMessage`,
        {
          chat_id: "5823965065",
          text: `Имя: ${this.name}\nТелефон: ${phone}\nEmail: ${this.email}\nСообщение: ${this.message}`,
        }
      );

      if (response.data.ok) {
        console.log("OK");
      } else {
        console.log("ты сможешь");
      }
    },
  },
};
</script>
