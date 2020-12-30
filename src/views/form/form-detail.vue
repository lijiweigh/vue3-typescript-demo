<template>
  <a-page-header
    title="表单详情"
    :backIcon="false"
    class="page-header"
  />

  <section class="padding-4x">
    <a-card v-for="item in 5" :key="item" class="margin-bottom-4x">
      <a-descriptions title="表单详情">
        <a-descriptions-item label="name">
          {{formDetail.name}}
        </a-descriptions-item>
        <a-descriptions-item label="region">
          {{formDetail.region}}
        </a-descriptions-item>
        <a-descriptions-item label="date">
          {{formDetail.date[0] + "~" + formDetail.date[1]}}
        </a-descriptions-item>
        <a-descriptions-item label="delivery">
          {{formDetail.delivery ? "是" : "否"}}
        </a-descriptions-item>
        <a-descriptions-item label="type">
          <template v-for="(item, index) in formDetail.type" :key="item">
            {{FormType[item]}}
            <span v-if="index !== formDetail.type.length - 1"></span>
          </template>
        </a-descriptions-item>
        <a-descriptions-item label="resource">
          {{FormResource[formDetail.resource]}}
        </a-descriptions-item>
        <a-descriptions-item label="desc">
          {{formDetail.desc}}
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { FormListRes } from '@/types/form'
import { FormResource, FormType } from '@/const/form'

const detail: FormListRes = {
  name: '正经的名字',
  region: 'Zone one',
  date: [new Date().toLocaleString(), new Date().toLocaleString()],
  delivery: false,
  type: [2, 3],
  resource: 2,
  desc: '多好的描述啊'
}

export default defineComponent({
  name: 'MyFormDetail',
  setup(){
    const $route = useRoute()
    const id = $route.params.id as string
    let formDetail = ref<FormListRes | null>(null)

    function getDetail(id: string) {
      return new Promise(resolve => {
        formDetail.value = detail
        resolve(formDetail)
      })
    }

    getDetail(id)

    return {
      formDetail,
      FormType,
      FormResource,
    }
  }
})
</script>