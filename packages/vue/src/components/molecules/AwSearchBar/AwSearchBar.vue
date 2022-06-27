<template>
  <AwInput
    v-focus
    class="sf-search-bar"
    type="search"
    name="search"
    :value="value"
    :placeholder="placeholder"
    :icon="icon"
    v-bind="$attrs"
    v-on="listeners"
    @keyup.enter="$emit('input', value)"
  >
  </AwInput>
</template>
<script>
import AwInput from "../../atoms/AwInput/AwInput.vue";
import { focus } from "../../../utilities/directives";

export default {
  name: "AwSearchBar",
  components: { AwInput },
  directives: {
    focus,
  },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: null,
    },
    icon: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur"),
        "click:icon": () => this.$emit("click:icon", this.value),
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
