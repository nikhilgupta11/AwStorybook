<template>
  <option :value="value" class="sf-select__option" tabindex="0">
    <slot />
  </option>
</template>
<script>
export default {
  name: "AwSelectOption",
  props: {
    value: {
      type: [String, Number, Object],
      default: "",
    },
  },
};
</script>
