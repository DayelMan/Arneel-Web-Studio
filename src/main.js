// Apps
import { createApp } from 'vue'
import App from './App.vue'
import roters from "./router/index.js";
import "./assets/style/main.scss";
import "./components/Navbar/Navbar.js";


const app = createApp(App);
app.use(roters);
app.mount('#app');