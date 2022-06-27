<template>
  <div
    class="sf-bottom-navigation-item"
    :class="{
      'is-active': isActive,
      'is-floating': isFloating,
      center: !icon || !label,
    }"
    v-on="$listeners"
  >
    <slot name="icon" v-bind="{ icon, iconActive, iconSize, isFloating }">
      <AwCircleIcon
        v-if="isFloating"
        :icon="icon"
        icon-color="white"
        icon-size="28px"
        :aria-label="label"
      />
      <AwButton
        v-else-if="icon"
        class="sf-button--pure sf-bottom-navigation-item__icon"
        :aria-label="label"
      >
        <AwIcon :icon="currentIcon" :size="iconSize" />
      </AwButton>
    </slot>
    <slot name="label" v-bind="{ label }">
      <div
        class="sf-bottom-navigation-item__label"
        :class="{
          'display-none': !label,
          'has-margin': icon,
        }"
      >
        {{ label }}
      </div>
    </slot>
  </div>
</template>
<script>
import AwIcon from "../../../atoms/AwIcon/AwIcon.vue";
import AwCircleIcon from "../../../atoms/AwCircleIcon/AwCircleIcon.vue";
import AwButton from "../../../atoms/AwButton/AwButton.vue";
import { focus } from "../../../../utilities/directives";
export default {
  name: "AwBottomNavigationItem",
  directives: { focus },
  components: {
    AwCircleIcon,
    AwIcon,
    AwButton,
  },
  props: {
    icon: {
      type: [String, Array],
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    iconActive: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String,
      default: "20px",
    },
    isFloating: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive ? this.iconActive : this.icon;
    },
  },
};
</script>
