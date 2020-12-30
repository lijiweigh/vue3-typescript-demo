<template>
  <a-page-header
    title="创建表单"
    :backIcon="false"
    class="page-header"
  />
  <section class="padding-4x">
    <a-card>
      <a-form ref="formRef" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Activity name" v-bind="validateInfos.name">
          <a-input v-model:value="formData.name" />
        </a-form-item>
        <a-form-item label="Activity zone" v-bind="validateInfos.region">
          <a-select v-model:value="formData.region" placeholder="please select your zone">
            <a-select-option value="shanghai">
              Zone one
            </a-select-option>
            <a-select-option value="beijing">
              Zone two
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Activity time" v-bind="validateInfos.date">
          <a-range-picker
            v-model:value="formData.date"
            format="YYYY-MM-DD"
            valueFormat="YYYY-MM-DD"
          />
        </a-form-item>
        <a-form-item label="Instant delivery">
          <a-switch v-model:checked="formData.delivery" />
        </a-form-item>
        <a-form-item label="Activity type" v-bind="validateInfos.type">
          <a-checkbox-group v-model:value="formData.type">
            <a-checkbox v-for="(item, index) in FormTypeList" :key="index" :value="item.value">
              {{item.title}}
            </a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="Resources" v-bind="validateInfos.resource">
          <a-radio-group v-model:value="formData.resource">
            <a-radio v-for="(item, index) in FormResourceList" :key="index" :value="item.value">
              {{item.title}}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity form" v-bind="validateInfos.desc">
          <a-input v-model:value="formData.desc" type="textarea" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
          <a-button style="margin-left: 10px;" @click="onReset">
            Reset
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { CreateFormReq } from '@/types/form'
import { useForm } from '@ant-design-vue/use'
import { message } from 'ant-design-vue'
import { FormTypeList, FormResourceList } from '@/const/form'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MyCreateForm',
  setup(){
    const formData: CreateFormReq = reactive({
      name: '',
      region: '',
      date: [],
      delivery: false,
      type: [],
      resource: -1,
      desc: ''
    })

    const $router = useRouter()

    const formRules = reactive({
      name: [ { required: true, message: 'name is required'} ],
      region: [ { required: true, message: 'region is required' } ],
      date: [ { required: true, type: 'array', validator(rule: any, value: string[]) {
        return new Promise((resolve, reject) => {
          if(value.length === 0) {
            reject(new Error('请选择 Activity date'))
          } else {
            resolve('')
          }
        })
      } } ],
      type: [ { required: true, type: 'array', validator(rule: any, value: string[]) {
        return new Promise((resolve, reject) => {
          if(value.length === 0) {
            reject(new Error('请选择 Activity type'))
          } else {
            resolve('')
          }
        })
      } } ],
      resource: [ { required: true, type: 'number',  message: 'resource is required' } ],
      desc: [ { required: true, message: 'desc is required' } ],
    })

    const { resetFields, validate, validateInfos } = useForm(formData, formRules)

    const onSubmit = async () => {
      try {
        await validate()
        message.success('创建成功')
        setTimeout(() => {
          $router.push({
            name: 'formList'
          })
        }, 1000);
      } catch {}
    }

    const onReset = resetFields

    return {
      formData,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      onSubmit,
      onReset,
      validateInfos,
      FormTypeList,
      FormResourceList
    }
  }
})
</script>