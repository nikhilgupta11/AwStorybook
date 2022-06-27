<template>
  <div class="sf-bottom-modal">
    <AwOverlay
      :visible="isOpen"
      class="sf-bottom-modal__overlay"
      @click="close"
    />
    <AwTransition :transition="transition">
      <div
        v-show="isOpen"
        role="dialog"
        aria-modal="true"
        class="sf-bottom-modal__container"
      >
        <slot name="title">
          <AwHeading
            :class="{ 'display-none': !title }"
            :level="3"
            :title="title"
            class="sf-bottom-modal__title"
          />
        </slot>
        <slot name="close-desktop">
          <AwCircleIcon
            class="sf-circle-icon--small sf-bottom-modal__close"
            aria-label="Close"
            icon="cross"
            @click="close"
          />
        </slot>
        <slot />
        <slot name="close-mobile">
          <AwButton
            class="sf-button--full-width sf-bottom-modal__cancel"
            aria-label="Close"
            @click="close"
            >Cancel</AwButton
          >
        </slot>
      </div>
    </AwTransition>
  </div>
</template>
<script>
import AwOverlay from "../../atoms/AwOverlay/AwOverlay.vue";
import AwTransition from "../../../utilities/transitions/component/SfTransition.js";
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwCircleIcon from "../../atoms/AwCircleIcon/AwCircleIcon.vue";
import { isClient } from "../../../utilities/helpers";
export default {
  name: "AwBottomModal",
  components: { AwOverlay, AwButton, AwCircleIcon, AwHeading, AwTransition },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    transition: {
      type: [String, Boolean],
      default: "",
    },
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!isClient) return;
        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("click:close");
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfBottomModal.scss";
</style>
