<template>
    <LayoutMenuItem
      v-if="!route.children || filterChildren.length === 0"
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
      <MyLayoutMenuSubItem v-for="item in filterChildren" :key="item.name" :route="item"></MyLayoutMenuSubItem>
    </a-sub-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRef } from 'vue'
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
      // 如果这里使用 default() {} 这种形式， 下面的 toRef() 无法对第二个参数进行正确的类型判断。。。。。
      default: () => {
        return {}
      }
    },
  },
  setup(props){
    const filterChildren = computed(() => {
      return (toRef(props, 'route').value as RouteRecordNormalized).children.filter(child => {
        return !child?.meta?.hideInMenu
      })
    })

    return {
      filterChildren
    }
  }
})
</script>