<template>
  <div class="px-6 py-16">
    <form class="login-form" @submit.prevent="loginUser">
      <AppInput
        label="Email"
        v-model="values.email"
        type="email"
        @validate="validate('email')"
        name="email"
        :error="errors.email"
      ></AppInput>
      <AppInput
        label="Name"
        v-model="values.name"
        type="text"
        @validate="validate('name')"
        name="name"
        :error="errors.name"
      ></AppInput>
      <AppButton type="submit">Submit</AppButton>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { object, string } from 'yup'

import AppButton from '../components/AppButton.vue'
import AppInput from '../components/AppInput.vue'

const loginFormSchema = object().shape({
  email: string().email().required(),
  name: string().required()
})

const values = ref({
  email: '',
  passwnameord: ''
})
const errors = ref({
  email: '',
  name: ''
})

const loginUser = () => {
  loginFormSchema
    .validate(values.value, { abortEarly: false })
    .then()
    .catch((err) => {
      err.inner.forEach((error) => {
        errors.value = { ...errors.value, [error.path]: error.message }
      })
    })
}
const validate = (field) => {
  loginFormSchema
    .validateAt(field, values.value)
    .then(() => {
      errors.value[field] = ''
    })
    .catch((err) => {
      errors.value[err.path] = err.message
    })
}
</script>
