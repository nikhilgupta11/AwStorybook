<template>
  <ul class="sf-list">
    <slot />
  </ul>
</template>
<script>
import AwListItem from "./_internal/AwListItem.vue";
import Vue from "vue";
Vue.component("AwListItem", AwListItem);
export default {
  name: "AwList",
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfList.scss";
</style>
