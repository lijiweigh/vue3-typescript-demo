<template>
  <a-layout class="layout">
    <a-layout-sider>
      <section class="logo-wrap padding-2x">
        <img class="logo margin-right-4x" src="@/assets/logo.png" alt="">
        Logo
      </section>
      <LayoutSider></LayoutSider>
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

<style lang="less" scoped>
.layout {
  .ant-layout-header,
  .ant-layout-sider {
    background: #fff;
  }
}
.logo-wrap {
  // color: #fff;
  font-size: 30px;
  height: 64px;
  box-sizing: border-box;
  .logo {
    height: 100%;
  }
}

</style>