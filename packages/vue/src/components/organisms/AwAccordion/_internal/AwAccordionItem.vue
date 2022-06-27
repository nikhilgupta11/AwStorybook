<template>
  <div class="sf-accordion-item">
    <slot
      name="header"
      v-bind="{
        header,
        isOpen,
        accordionClick,
        showChevron: $parent.showChevron,
      }"
    >
      <AwButton
        :aria-pressed="isOpen.toString()"
        :aria-expanded="isOpen.toString()"
        :class="{ 'is-open': isOpen }"
        class="sf-button--pure sf-accordion-item__header"
        :data-testid="'accordion-item-' + header"
        @click="accordionClick"
      >
        {{ header }}
        <slot name="additional-info" />
        <AwChevron
          tabindex="0"
          class="sf-accordion-item__chevron"
          :class="{ 'sf-chevron--right': !isOpen }"
        />
      </AwButton>
    </slot>
    <AwTransition :transition="$parent.transition">
      <div v-if="isOpen">
        <div class="sf-accordion-item__content">
          <slot />
        </div>
      </div>
    </AwTransition>
  </div>
</template>
<script>
import { focus } from "../../../../utilities/directives";
import AwTransition from "../../../../utilities/transitions/component/SfTransition";
import AwChevron from "../../../atoms/AwChevron/AwChevron.vue";
import AwButton from "../../../atoms/AwButton/AwButton.vue";
export default {
  name: "AwAccordionItem",
  directives: { focus },
  components: {
    AwChevron,
    AwButton,
    AwTransition,
  },
  props: {
    header: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfAccordion.scss";
</style>
