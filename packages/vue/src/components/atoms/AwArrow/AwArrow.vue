<template functional>
  <component
    :is="injections.components.AwButton"
    :class="[data.class, data.staticClass, 'sf-arrow']"
    :style="[data.style, data.staticStyle]"
    type="button"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot>
      <component
        :is="injections.components.AwIcon"
        size="1.5rem"
        icon="arrow_left"
        aria-hidden="true"
        v-bind="data.attrs"
        :class="[data.class, data.staticClass, 'sf-arrow__icon']"
      />
    </slot>
  </component>
</template>
<script>
import AwButton from "../AwButton/AwButton.vue";
import AwIcon from "../AwIcon/AwIcon.vue";
export default {
  name: "AwArrow",
  inject: {
    components: {
      default: { AwButton, AwIcon },
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfArrow.scss";
</style>
