import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/global.css'
import 'virtual:svg-icons-register' // 引入注册脚本
import SvgIcon from './components/SvgIcon/index.vue' // 引入组件
import "./assets/fonts.css"


const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
app.component('svg-icon', SvgIcon)





