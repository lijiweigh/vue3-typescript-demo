<template>
  <a-layout>
    <a-layout-sider>
      <LayoutSider></LayoutSider>
      <!-- <a-menu
        mode="inline"
      >
        <a-menu-item>菜单项</a-menu-item>
        <a-sub-menu title="子菜单">
          <a-menu-item>子菜单项</a-menu-item>
        </a-sub-menu>
      </a-menu> -->
    </a-layout-sider>
    <a-layout>
      <a-layout-header>headerrrr</a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutSider from './sider/index.vue'

export default defineComponent({
  name: 'MyLayout',
  components: {
    LayoutSider
  }
})
</script>