<template>
  <a-layout class="layout">
    <a-layout-sider class="layout-sider" width="256">
      <section class="logo-wrap padding-2x">
        <img class="logo margin-right-4x" src="@/assets/logo.png" alt="">
        Logo
      </section>
      <LayoutSider></LayoutSider>
    </a-layout-sider>
    <a-layout class="layout-main">
      <LayoutHeader></LayoutHeader>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutSider from './sider/index.vue'
import LayoutHeader from '@/components/layout/header/index.vue'

export default defineComponent({
  name: 'MyLayout',
  components: {
    LayoutSider,
    LayoutHeader
  }
})
</script>

<style lang="less" scoped>
.layout {
  min-height: 100vh;
  .ant-layout-header,
  .ant-layout-sider {
    background: #fff;
  }
  .layout-sider {
    position: fixed;
    left: 0;
    top: 0;
    width: @sideWidth;
    height: 100vh;
  }
  .layout-main {
    margin-left: @sideWidth;
    padding-top: @headerHeight;
  }
  :deep(.ant-menu-dark .ant-menu-inline.ant-menu-sub) {
    background: #313d5c;
  }
  :deep(.ant-menu-dark, .ant-menu-dark .ant-menu-sub) {
    background: #273352;
  }

  .logo-wrap {
    color: rgba(255, 255, 255, .65);
    font-size: 30px;
    height: @headerHeight;
    box-sizing: border-box;
    background: #273352;
    .logo {
      height: 100%;
    }
  }
}
</style>