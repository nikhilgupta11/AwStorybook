<template>
  <section class="sf-section">
    <slot
      name="heading"
      v-bind="{ levelHeading, titleHeading, subtitleHeading }"
    >
      <AwHeading
        v-if="titleHeading"
        :level="levelHeading"
        :title="titleHeading"
        :description="subtitleHeading"
      />
    </slot>
    <div class="sf-section__content">
      <slot />
    </div>
  </section>
</template>
<script>
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";
export default {
  name: "AwSection",
  components: {
    AwHeading,
  },
  props: {
    titleHeading: {
      type: String,
      default: "",
    },
    subtitleHeading: {
      type: String,
      default: "",
    },
    levelHeading: {
      type: Number,
      default: 2,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSection.scss";
</style>
