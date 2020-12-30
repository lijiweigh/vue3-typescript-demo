<template>
  <a-layout-header class="layout-header padding-left-4x padding-right-4x">
    <BreadCrumb></BreadCrumb>
    <section class="user-info">
      <a-dropdown>
        <span>
          <UserOutlined />
          admin
        </span>
        <template #overlay>
          <a-menu @click="handleClickMenu">
            <a-menu-item key="abc">
              <AppleOutlined />
              这是安卓
            </a-menu-item>
            <a-menu-item key="abc">
              <AndroidOutlined />
              这是苹果
            </a-menu-item>
            <a-menu-item key="logout">
              <span>
                <LogoutOutlined />
                退出登录
              </span>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

    </section>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BreadCrumb from '@/components/breadcrumb/index.vue'

export default defineComponent({
  name: 'MyLayoutHeader',
  components: {
    BreadCrumb
  },
  setup(){
    const handleClickMenu = (item: any, key: string) => {
      console.log(key)
    }

    return {
      handleClickMenu
    }
  }
})
</script>

<style lang="less" scoped>
.layout-header {
  position: fixed;
  left: @sideWidth;
  top: 0;
  z-index: 99;
  width: calc(100vw - @sideWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 2px #eee;
}
</style>