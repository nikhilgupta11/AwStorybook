<template>
  <div class="sf-color-picker" :class="{ 'sf-color-picker--active': isOpen }">
    <transition name="sf-color-picker" mode="out-in">
      <div
        v-if="!isOpen"
        key="color-picker-button"
        class="sf-color-picker__button smartphone-only"
      >
        <slot name="open" v-bind="{ toggle }">
          <AwButton
            class="color-secondary sf-color-picker__button-open"
            @click="toggle"
            >+ Colors</AwButton
          >
        </slot>
      </div>
      <div v-else key="color-picker-colors" class="sf-color-picker__colors">
        <AwOverlay
          :visible="isOpen"
          class="sf-color-picker__colors__overlay smartphone-only"
        />
        <slot name="label" v-bind="{ label }">
          <div
            :class="{ 'display-none': !label }"
            class="sf-color-picker__label smartphone-only"
          >
            {{ label }}
          </div>
        </slot>
        <slot />
        <slot name="close" v-bind="{ hasClose, toggle, isOpen }">
          <AwButton
            :class="{ 'display-none': !hasClose }"
            class="sf-button--text sf-color-picker__close smartphone-only"
            aria-label="Close button"
            :aria-pressed="!isOpen"
            @click="toggle"
          >
            <AwIcon icon="cross" />
          </AwButton>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwOverlay from "../../atoms/AwOverlay/AwOverlay.vue";

export default {
  name: "AwColorPicker",
  components: { AwIcon, AwButton, AwOverlay },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    hasClose: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit("click:toggle");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfColorPicker.scss";
</style>
