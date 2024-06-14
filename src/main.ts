import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { AnimatedBackground} from "./canvas";

const animatedBackground = new AnimatedBackground("#canvas", 'black');

createApp(App).mount('#app')

animatedBackground.render();
