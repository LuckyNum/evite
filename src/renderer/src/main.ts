import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from '@renderer/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

createApp(App).component('svg-icon', SvgIcon).mount('#app')
