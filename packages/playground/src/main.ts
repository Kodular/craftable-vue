import { createApp } from 'vue'
import { install as MyLibPLugin } from '@linusborg/lib'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(MyLibPLugin)
app.use(ElementPlus)
app.mount('#app')
