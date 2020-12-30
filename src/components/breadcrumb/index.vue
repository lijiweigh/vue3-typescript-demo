<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="route.path">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { BreadCrumbData } from '@/types/common'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MyBreadCrumb',
  setup(){
    const $route = useRoute()
    const routes = computed(() => {
      const result: BreadCrumbData[] = []
      $route.matched.forEach(route => {
        if(route.meta.preBreadCrumb) {
          result.push(route.meta.preBreadCrumb)
        }
        result.push({
          path: route.path as string,
          breadcrumbName: route.meta.title as string
        })
      })
      return result
    })

    return {
      routes
    }
  }
})
</script>