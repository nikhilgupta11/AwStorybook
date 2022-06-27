<template>
  <div class="sf-bar">
    <div>
      <slot name="back">
        <AwButton
          :class="{ 'display-none': !back }"
          aria-label="back"
          class="sf-button--pure sf-bar__icon"
          type="button"
          @click="$emit('click:back')"
        >
          <AwIcon icon="chevron_left" size="0.875rem" />
        </AwButton>
      </slot>
    </div>
    <div>
      <slot name="title" v-bind="{ title }">
        <div class="sf-bar__title">{{ title }}</div>
      </slot>
    </div>
    <div>
      <slot name="close">
        <AwButton
          :class="{ 'display-none': !close }"
          class="sf-button--pure sf-bar__icon"
          aria-label="close"
          type="button"
          @click="$emit('click:close')"
        >
          <AwIcon icon="cross" size="14px" />
        </AwButton>
      </slot>
    </div>
  </div>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
export default {
  name: "AwBar",
  components: {
    AwIcon,
    AwButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    back: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfBar.scss";
</style>
