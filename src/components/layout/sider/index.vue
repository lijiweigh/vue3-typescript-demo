<template>
  <a-menu
    mode="inline"
    theme="dark"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="handleMenuClick"
    style="width: 256px; height: 100vh;"
  >
    <MenuSubItem v-for="route in routes" :key="route.name" :route="route"></MenuSubItem>
  </a-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'
import { RouteRecordNormalized, useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router'
import MenuSubItem from '@/components/layout/sider/menu-sub-item.vue'
import { Menu } from 'ant-design-vue'

export default defineComponent({
  name: 'MyLayoutSider',
  components: {
    MenuSubItem
  },
  setup(){
    //用于在 setup() 里获取 router 实例 相当于 this.$router，仅在 setup() 中有效
    const $router = useRouter()
    // antdv vue3 版本目前还没有官方的类型声明，所以这里先 anyscript
    const handleMenuClick = (item: any) => {
      $router.push({
        name: item.key
      })
    }
    // 相当于 vue2 的 this.$route
    const $route = useRoute()
    const openKeys = ref<string[]>([])
    const selectedKeys = ref<string[]>([])

    openKeys.value = $route.matched.slice(0, -1).map(route => {
      return route.name
    }) as string[]

    watch(
      $route,
      () => {
        selectedKeys.value = [$route.name as string]
        let curOpenKeys = openKeys.value
        curOpenKeys = Array.from(new Set($route.matched.slice(0, -1).map(route => {
          return route.name
        }).concat(curOpenKeys) as string[]))
        openKeys.value =  curOpenKeys
      },
      { immediate: true }
    )

    return {
      routes,
      openKeys,
      selectedKeys,
      handleMenuClick,
    }
  }
})
</script>