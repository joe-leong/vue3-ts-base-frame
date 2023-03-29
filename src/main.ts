import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

const bootstrap = () => {
  const app = createApp(App)

  // 安装初始化路由
  setupRouter(app)
  setupStore(app)

  app.mount('#app')
}

// 启动
bootstrap()
