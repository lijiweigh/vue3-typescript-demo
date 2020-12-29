import { HomeOutlined } from '@ant-design/icons-vue'
import { App } from 'vue'

const icons: any[] = [
  HomeOutlined
]

export default function registyIcons(app: App) {
  icons.forEach(icon => {
    app.component(icon.name, icon)
  })
}