<template>
  <div class="sf-dropdown">
    <AwOverlay :visible="isOpen" class="sf-dropdown__overlay" />
    <slot name="opener">
      <AwButton
        class="sf-button--full-width sf-dropdown__opener"
        @click.stop="open"
        >Choose your action</AwButton
      >
    </slot>
    <transition name="sf-dropdown">
      <div
        v-show="isOpen"
        v-click-outside="checkPersistence"
        class="sf-dropdown__container"
      >
        <slot name="title" v-bind="{ title }">
          <div :class="{ 'display-none': !title }" class="sf-dropdown__title">
            {{ title }}
          </div>
        </slot>
        <slot />
        <slot name="cancel">
          <AwButton
            class="sf-button--full-width sf-dropdown__cancel"
            @click.stop="close"
            >Cancel</AwButton
          >
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import clickOutside from "../../../utilities/directives/";
import AwOverlay from "../../atoms/AwOverlay/AwOverlay.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import isClient from "../../../utilities/helpers";

export default {
  name: "AwDropdown",
  components: {
    AwOverlay,
    AwButton,
  },
  directives: {
    clickOutside,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    persistent: {
      type: Boolean,
      default: false,
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
    open() {
      this.$emit("click:open");
    },
    close() {
      this.$emit("click:close");
    },
    checkPersistence() {
      if (!this.persistent) return this.close();
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
@import "~@storefront-ui/shared/styles/components/molecules/SfDropdown.scss";
</style>
