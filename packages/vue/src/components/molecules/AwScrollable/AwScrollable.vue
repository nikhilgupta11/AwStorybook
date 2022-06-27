<template>
  <div class="sf-scrollable" :class="{ 'is-open': !isHidden }">
    <div ref="content" class="sf-scrollable__content" :style="style">
      <slot />
    </div>
    <slot name="view-all" v-bind="{ hasScroll, showText, hideText }">
      <AwButton
        v-show="hasScroll"
        class="sf-button--text sf-scrollable__view-all"
        @click="isHidden = !isHidden"
      >
        <span v-if="isHidden">{{ showText }}</span>
        <span v-else>{{ hideText }}</span>
      </AwButton>
    </slot>
  </div>
</template>
<script>
import AwButton from "../../atoms/AwButton/AwButton.vue";
export default {
  name: "AwScrollable",
  components: {
    AwButton,
  },
  props: {
    maxContentHeight: {
      type: String,
      default: "",
    },
    showText: {
      type: String,
      default: "Show",
    },
    hideText: {
      type: String,
      default: "Hide",
    },
  },
  data() {
    return {
      isHidden: true,
      hasScroll: false,
    };
  },
  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim()
          ? this.maxContentHeight
          : undefined,
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfScrollable.scss";
</style>
