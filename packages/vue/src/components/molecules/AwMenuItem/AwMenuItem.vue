<template>
  <component
    :is="componentIs"
    class="sf-menu-item"
    v-bind="bind"
    :data-testid="label"
    v-on="$listeners"
  >
    <slot name="icon" />
    <slot name="label" v-bind="{ label }">
      <span class="sf-menu-item__label">{{ label }}</span>
    </slot>
    <slot name="count" v-bind="{ count }">
      <span class="sf-menu-item__count">{{ count }}</span>
    </slot>
    <slot name="mobile-nav-icon" v-bind="{ icon }">
      <AwIcon
        :class="{ 'display-none': !icon }"
        :icon="icon"
        class="sf-menu-item__mobile-nav-icon smartphone-only"
        size="14px"
      />
    </slot>
  </component>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwLink from "../../atoms/AwLink/AwLink.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
export default {
  name: "AwMenuItem",
  components: {
    AwIcon,
    AwLink,
    AwButton,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: [String, Array],
      default: "chevron_right",
    },
    count: {
      type: [String, Number],
      default: "",
    },
    link: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    bind() {
      const bind = {};
      if (this.link) {
        bind.link = this.link;
      } else {
        bind.class = "sf-button--pure";
      }
      return bind;
    },
    componentIs() {
      return this.link ? "AwLink" : "AwButton";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfMenuItem.scss";
</style>
