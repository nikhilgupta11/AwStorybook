<template>
  <div class="sf-footer-column">
    <AwButton
      v-focus
      type="button"
      class="sf-button--pure sf-footer-column__title smartphone-only"
      @click="toggle(title)"
    >
      {{ title }}
      <span class="sf-footer-column__chevron">
        <AwChevron :class="{ 'sf-chevron--top': isColumnOpen }" />
      </span>
    </AwButton>
    <AwHeading
      class="sf-footer-column__title desktop-only"
      :title="title"
      :level="5"
    />
    <transition name="sf-fade">
      <div
        :class="{
          'sf-footer-column__content--hidden-on-mobile': !isColumnOpen,
        }"
        class="sf-footer-column__content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import AwChevron from "../../../atoms/AwChevron/AwChevron.vue";
import AwButton from "../../../atoms/AwButton/AwButton.vue";
import AwHeading from "../../../atoms/AwHeading/AwHeading.vue";
import { focus } from "../../../../utilities/directives";
export default {
  name: "AwFooterColumn",
  directives: { focus },
  components: {
    AwChevron,
    AwButton,
    AwHeading,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  inject: ["items"],
  data() {
    return {
      isColumnOpen: true,
    };
  },
  watch: {
    "$parent.isOpen": {
      handler(newVal) {
        this.isColumnOpen = newVal.includes(this.title);
      },
    },
  },
  created() {
    this.items.push(this.title);
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    },
  },
};
</script>
