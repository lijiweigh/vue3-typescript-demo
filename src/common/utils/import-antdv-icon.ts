import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'
import { App } from 'vue'

const icons: any[] = [
  HomeOutlined,
  UserOutlined,
  LogoutOutlined
]

export default function registyIcons(app: App) {
  icons.forEach(icon => {
    app.component(icon.name, icon)
  })
}