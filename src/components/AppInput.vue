<template>
  <div :class="['form-group', !!error && 'has-error']">
    <label class="form-label" for="email">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="form-input"
      @blur="$emit('validate')"
      @keypress="$emit('validate')"
    />
    <p class="form-error" v-if="!!error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    type: { required: true },
    label: { required: true },
    name: { required: true },
    value: { required: true },
    error: { required: true }
  }
}
</script>
<style scoped lang="scss">
.form-input {
  @apply block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
}
.form-error{
    @apply text-red-500;
}
</style>
