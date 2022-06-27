<template functional>
  <component
    :is="injections.components.AwButton"
    :class="[
      data.class,
      data.staticClass,
      'sf-button--pure sf-color',
      { 'is-active': props.selected },
    ]"
    :style="{
      ...data.style,
      ...data.staticStyle,
      '--color-background': props.color,
    }"
    :aria-pressed="props.selected.toString()"
    :data-testid="props.color"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <transition name="sf-bounce">
      <slot name="badge" v-bind="{ props }">
        <component
          :is="injections.components.AwBadge"
          :class="{
            'display-none':
              !props.hasBadge || (!props.selected && props.hasBadge),
          }"
          class="sf-color__badge smartphone-only"
        >
          <component
            :is="injections.components.AwIcon"
            size="16px"
            color="white"
            icon="check"
            aria-hidden="true"
          />
        </component>
      </slot>
    </transition>
  </component>
</template>
<script>
import AwBadge from "../AwBadge/AwBadge.vue";
import AwIcon from "../AwIcon/AwIcon.vue";
import AwButton from "../AwButton/AwButton.vue";
export default {
  name: "AwColor",
  inject: {
    components: {
      default: {
        AwBadge,
        AwIcon,
        AwButton,
      },
    },
  },
  props: {
    color: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    hasBadge: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfColor.scss";
</style>
