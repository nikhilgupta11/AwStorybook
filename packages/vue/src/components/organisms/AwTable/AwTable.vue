<template>
  <table class="sf-table">
    <slot />
  </table>
</template>
<script>
import Vue from "vue";
import AwTableRow from "./_internal/AwTableRow.vue";
import AwTableData from "./_internal/AwTableData.vue";
import AwTableHeader from "./_internal/AwTableHeader.vue";
import AwTableHeading from "./_internal/AwTableHeading.vue";
Vue.component("AwTableRow", AwTableRow);
Vue.component("AwTableData", AwTableData);
Vue.component("AwTableHeader", AwTableHeader);
Vue.component("AwTableHeading", AwTableHeading);
export default {
  name: "AwTable",
  provide() {
    const table = {};
    Object.defineProperty(table, "updateColumnsCount", {
      value: this.updateColumnsCount,
    });
    return { table };
  },
  methods: {
    updateColumnsCount(columnsCount) {
      this.$el.style.setProperty(
        "--_table-column-width",
        Math.ceil(columnsCount / 2)
      );
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfTable.scss";
</style>
