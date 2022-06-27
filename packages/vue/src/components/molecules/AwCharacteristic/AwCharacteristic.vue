<template>
  <div class="sf-characteristic">
    <slot name="icon" v-bind="{ colorIcon, sizeIcon, icon }">
      <div class="sf-characteristic__icon">
        <AwIcon
          aria-hidden="true"
          :color="colorIcon"
          :size="sizeIcon"
          :icon="icon"
        />
      </div>
    </slot>
    <slot name="text" v-bind="{ title, description }">
      <div class="sf-characteristic__text">
        <slot name="title" v-bind="{ title }">
          <div class="sf-characteristic__title">{{ title }}</div>
        </slot>
        <slot name="description" v-bind="{ description }">
          <div class="sf-characteristic__description">{{ description }}</div>
        </slot>
      </div>
    </slot>
  </div>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
export default {
  name: "AwCharacteristic",
  components: {
    AwIcon,
  },
  props: {
    colorIcon: {
      type: String,
      default: "",
    },
    sizeIcon: {
      type: String,
      default: "",
    },
    icon: {
      type: [String, Array],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCharacteristic.scss";
</style>
