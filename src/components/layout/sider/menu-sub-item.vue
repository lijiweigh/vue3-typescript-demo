<template>
    <LayoutMenuItem
      v-if="!route.children || filterHiddenMenu(route).length === 0"
      :route="route"
      :key="route.name"
    ></LayoutMenuItem>
    <a-sub-menu :key="route.name" v-else>
      <template #title>
        <span>
          <component v-if="route.meta.icon" :is="route.meta.icon"></component>
          {{route.meta.title}}
        </span>
      </template>
      <MyLayoutMenuSubItem v-for="item in route.children" :key="item.name" :route="item"></MyLayoutMenuSubItem>
    </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordNormalized } from 'vue-router'
import LayoutMenuItem from './menu-item.vue'

export default defineComponent({
  name: 'MyLayoutMenuSubItem',
  components: {
    LayoutMenuItem
  },
  props: {
    route: {
      // ts 的类型校验需要使用 PropType 强制转换构造函数
      // https://vue3js.cn/docs/zh/guide/typescript-support.html#%E6%B3%A8%E9%87%8A-props
      type: Object as PropType<RouteRecordNormalized>,
      default() {
        return []
      }
    }
  },
  setup(){
    const filterHiddenMenu = (route: RouteRecordNormalized) => {
      return route.children.filter(child => {
        return !child?.meta?.hiddenInMenu
      })
    }

    return {
      filterHiddenMenu
    }
  }
})
</script>