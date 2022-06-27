<template>
  <div class="sf-address-picker">
    <slot />
  </div>
</template>
<script>
import AwAddress from "./_internal/AwAddress.vue";
import Vue from "vue";

Vue.component("AwAddress", AwAddress);
export default {
  name: "AwAddressPicker",
  model: {
    prop: "selected",
    event: "change",
  },
  props: {
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedValue: this.selected,
    };
  },
  provide() {
    return {
      getSelectedValue: this.getSelectedValue,
      setSelectedValue: this.setSelectedValue,
    };
  },
  watch: {
    selected(newVal) {
      this.selectedValue = newVal;
    },
  },
  methods: {
    getSelectedValue() {
      return this.selectedValue;
    },
    setSelectedValue(newVal) {
      const newValue = newVal;
      this.selectedValue = newValue;
      this.$emit("change", newValue);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddressPicker.scss";
</style>
