<template>
  <a-page-header
    title="表单列表"
    :backIcon="false"
    class="page-header"
  />

  <section class="padding-4x">
    <a-card>
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Activity name">
          <a-input v-model:value="formListReq.name" />
        </a-form-item>
        <a-form-item label="Activity zone">
          <a-select v-model:value="formListReq.region" placeholder="please select your zone">
            <a-select-option value="Zone one">
              Zone one
            </a-select-option>
            <a-select-option value="Zone two">
              Zone two
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Resources">
          <a-radio-group v-model:value="formListReq.resource">
            <a-radio v-for="(item, index) in FormResourceList" :key="index" :value="item.value">
              {{item.title}}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Search
          </a-button>
          <a-button style="margin-left: 10px;" @click="resetFields">
            Reset
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <a-card class="margin-top-4x">
      <a-table :columns="columns" :data-source="formListRes" rowKey="id" :pagination="false">
        <template #name="{text, record}">
          <router-link :to="{name: 'formDetail', params: {id: record.id}}">{{text}}</router-link>
        </template>
        <template #date="{text}">
          <span>{{text.join("~")}}</span>
        </template>
        <template #delivery="{text}">
          <span>{{text ? "是" : "否"}}</span>
        </template>
        <template #type="{text}">
          <span>
            <template v-for="(t, index) in text" :key="index">
              {{FormType[t]}}
              <span v-if="index !== text.length - 1">、</span>
            </template>
          </span>
        </template>
        <template #resource="{text}">
          {{FormResource[text]}}
        </template>
      </a-table>

      <a-pagination
        class="margin-top-4x"
        :total="totalData.length"
        show-size-changer
        :show-total="total => `共 ${total} 条数据`"
        :page-size="formListReq.pageSize"
        v-model:current="formListReq.page"
        @change="getFormList(formListReq)"
        @showSizeChange="handleSizeChange"
      />
    </a-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { FormListReq, FormListRes, FormColumn } from '@/types/form'
import { useForm } from '@ant-design-vue/use'
import { FormType, FormResource, FormResourceList } from '@/const/form'

let totalData: FormListRes[] = [
  {
    name: 'aabcc',
    region: 'Zone one',
    date: [new Date().toLocaleString(), new Date().toLocaleString()],
    delivery: false,
    type: [1, 2],
    resource: 2,
    desc: 'desc csed',
  },
  {
    name: 'aaabbb',
    region: 'Zone one',
    date: [new Date().toLocaleString(), new Date().toLocaleString()],
    delivery: false,
    type: [2, 3],
    resource: 2,
    desc: 'desc csed',
  },
  {
    name: 'ere',
    region: 'Zone one',
    date: [new Date().toLocaleString(), new Date().toLocaleString()],
    delivery: false,
    type: [1, 3],
    resource: 1,
    desc: 'desc csed',
  },
  {
    name: 'ssss',
    region: 'Zone one',
    date: [new Date().toLocaleString(), new Date().toLocaleString()],
    delivery: false,
    type: [2],
    resource: 2,
    desc: 'desc csed',
  },
  {
    name: 'dddd',
    region: 'Zone one',
    date: [new Date().toLocaleString(), new Date().toLocaleString()],
    delivery: false,
    type: [3],
    resource: 1,
    desc: 'desc csed',
  },
  {
    name: 'ccc',
    region: 'Zone one',
    date: [new Date().toLocaleString(), new Date().toLocaleString()],
    delivery: false,
    type: [1],
    resource: 1,
    desc: 'desc csed',
  },
]
totalData = [
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
  ...JSON.parse(JSON.stringify(totalData)),
]
totalData.forEach((item, index) => {
  item.id = item.name + index
})

export default defineComponent({
  name: 'MyFormList',
  setup(){
    const formListReq: FormListReq = reactive({
      name: '',
      region: undefined,
      resource: undefined,
      page: 1,
      pageSize: 10
    })

    const columns: FormColumn[] = [
      {
        title: 'name',
        dataIndex: 'name',
        slots: { customRender: 'name' },
      },
      {
        title: 'region',
        dataIndex: 'region',
      },
      {
        title: 'date',
        dataIndex: 'date',
        slots: { customRender: 'date' },
      },
      {
        title: 'delivery',
        dataIndex: 'delivery',
        slots: { customRender: 'delivery' },
      },
      {
        title: 'type',
        dataIndex: 'type',
        slots: { customRender: 'type' },
      },
      {
        title: 'resource',
        dataIndex: 'resource',
        slots: { customRender: 'resource' },
      },
      {
        title: 'desc',
        dataIndex: 'desc',
      },
    ]

    let formListRes = ref<FormListRes[]>([])

    function getFormList(req: FormListReq) {
      return new Promise(resolve => {
        let result: FormListRes[] = []
        result = totalData.filter(r => {
          return r.name.includes(req.name) &&
                 (!req.region || r.region === req.region) &&
                 (!req.resource || r.resource === req.resource)
        })
        result = result.slice((req.page - 1) * req.pageSize, req.page * req.pageSize)
        formListRes.value = result
        resolve(result)
      })
    }

    const onSubmit = () => {
      getFormList(formListReq)
    }

    const handleSizeChange = (current: number, size: number) => {
      formListReq.page = 1
      formListReq.pageSize = size
      getFormList(formListReq)
    }

    getFormList(formListReq)

    const { resetFields } = useForm(formListReq, {})

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      resetFields,
      onSubmit,
      formListReq,
      FormResourceList,
      FormType,
      FormResource,
      formListRes,
      columns,
      totalData,
      getFormList,
      handleSizeChange
    }
  }
})
</script>