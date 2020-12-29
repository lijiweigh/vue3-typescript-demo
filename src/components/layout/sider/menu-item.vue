<template>
  <a-menu-item :key="route.name">
    <component v-if="route.meta.icon" :is="route.meta.icon"></component>
    <span>{{route.meta.title}}</span>
  </a-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordNormalized } from 'vue-router'

export default defineComponent({
  name: 'MyLayoutMenuItem',
  props: {
    route: {
      type: Object as PropType<RouteRecordNormalized>
    }
  }
})
</script>