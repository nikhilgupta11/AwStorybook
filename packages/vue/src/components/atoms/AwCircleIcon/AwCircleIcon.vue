<template functional>
  <component
    :is="injections.components.AwButton"
    :class="[data.class, data.staticClass, 'sf-circle-icon']"
    v-bind="data.attrs"
    :disabled="props.disabled"
    v-on="listeners"
  >
    <slot>
      <component
        :is="injections.components.AwIcon"
        aria-hidden="true"
        class="sf-circle-icon__icon"
        :icon="props.icon"
        :size="props.iconSize"
      />
    </slot>
  </component>
</template>
<script>
import AwButton from "../AwButton/AwButton.vue";
import AwIcon from "../AwIcon/AwIcon.vue";
export default {
  name: "AwCircleIcon",
  inject: {
    components: {
      default: {
        AwButton,
        AwIcon,
      },
    },
  },
  props: {
    icon: {
      type: [String, Array],
      default: "home",
    },
    iconSize: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCircleIcon.scss";
</style>
