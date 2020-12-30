/**
 * antdv Vue3 的版本，图标组件不再内置，需要单独从 @ant-design/icons-vue 中引入，并当成普通组件注册
 */

import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  AppleOutlined,
  AndroidOutlined
} from '@ant-design/icons-vue'
import { App } from 'vue'

const icons: any[] = [
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  AppleOutlined,
  AndroidOutlined
]

export default function registyIcons(app: App) {
  icons.forEach(icon => {
    app.component(icon.name, icon)
  })
}