<template>
  <div class="sf-tabs__tab">
    <slot name="title" v-bind="{ tabClick, isActive, title }">
      <AwButton
        :aria-pressed="isActive.toString()"
        class="sf-button--pure sf-tabs__title"
        :class="{ 'is-active': isActive }"
        @click="tabClick"
      >
        {{ title }}
        <AwChevron
          class="sf-tabs__chevron"
          :class="{ 'sf-chevron--right': !isActive }"
        />
      </AwButton>
    </slot>
    <div class="sf-tabs__content">
      <div :class="{ 'display-none': !isActive }" class="sf-tabs__content__tab">
        <AwScrollable
          v-if="tabMaxContentHeight"
          :max-content-height="tabMaxContentHeight"
          :show-text="tabShowText"
          :hide-text="tabHideText"
        >
          <slot />
        </AwScrollable>
        <slot v-else />
      </div>
    </div>
  </div>
</template>
<script>
import { isClient } from "../../../../utilities/helpers";
import AwChevron from "../../../atoms/AwChevron/AwChevron.vue";
import AwButton from "../../../atoms/AwButton/AwButton.vue";
import AwScrollable from "../../../molecules/AwScrollable/AwScrollable.vue";
export default {
  name: "AwTab",
  components: {
    AwChevron,
    AwScrollable,
    AwButton,
  },
  inject: ["tabConfig"],
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: false,
      desktopMin: 1024,
    };
  },
  computed: {
    tabMaxContentHeight() {
      return this.tabConfig.tabMaxContentHeight;
    },
    tabShowText() {
      return this.tabConfig.tabShowText;
    },
    tabHideText() {
      return this.tabConfig.tabHideText;
    },
  },
  methods: {
    tabClick() {
      if (!isClient) return;
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth
      );
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    },
  },
};
</script>
