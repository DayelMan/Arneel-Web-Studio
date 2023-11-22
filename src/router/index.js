import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import portfolio from "../views/Portfolio/Portfolio.vue";
import contacts from "../views/Contacts/Contacts.vue";
import price from "../views/Prices/Price.vue"
import thanks from "../form-lesson/thank-you.vue"
const roters = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/portfolio", name: "Portfolio", component: portfolio },
    { path: "/contacts", name: "Contacts", component: contacts },
    { path: "/price", name: "Price", component: price },
    { path: "/thank-you", name: "thanks", component: thanks }
  ],
});

export default roters;
