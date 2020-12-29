<template>
  <a-menu
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="handleMenuClick"
  >
    <!-- <MenuSubItem :routes="routes"></MenuSubItem> -->
    <a-sub-menu v-for="route in routes" :key="route.name" :title="route.meta.title">
      <a-menu-item :key="child.name" v-for="child in route.children">{{child.meta.title}}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { RouteRecordNormalized, useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router'
import MenuSubItem from '@/components/layout/sider/menu-sub-item.vue'

export default defineComponent({
  name: 'MyLayoutSider',
  components: {
    // MenuSubItem
  },
  setup(){
    //用于在 setup() 里获取 router 实例 相当于 this.$router
    const $router = useRouter()
    // const routes = ref<RouteRecordRaw[]>([])
    // routes = routes
    const handleMenuClick = (route: RouteRecordNormalized) => {
      $router.push({
        name: route.name
      })
    }

    const $route = useRoute()
    const openKeys = ref<string[]>([])
    openKeys.value = $route.matched.slice(0, -1).map(route => {
      return route.name
    }) as string[]

    const selectedKeys = ref<string[]>([])
    selectedKeys.value = [$route.name as string]

    return {
      routes,
      openKeys,
      selectedKeys,
      handleMenuClick,
    }
  }
})
</script>