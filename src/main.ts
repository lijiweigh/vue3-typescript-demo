import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import registyIcons from '@/common/utils/import-antdv-icon'
import '@/common/style/less-variables.less'
const app = createApp(App)

registyIcons(app)

app.use(Antd);
import '@/common/style/page-base.css';

app.use(store).use(router).mount('#app')
