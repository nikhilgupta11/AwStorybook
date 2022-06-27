<template>
  <div class="sf-header-navigation-item" v-on="$listeners">
    <div
      class="
        sf-header-navigation-item__item sf-header-navigation-item__item--desktop
      "
    >
      <slot name="desktop-navigation-item">
        <AwLink class="sf-header-navigation-item__link" :link="link">{{
          label
        }}</AwLink>
      </slot>
      <slot />
    </div>
    <div
      class="
        sf-header-navigation-item__item sf-header-navigation-item__item--mobile
      "
    >
      <slot name="mobile-navigation-item">
        <AwMenuItem :label="label" class="sf-header-navigation-item__menu-item">
          {{ label }}
        </AwMenuItem>
      </slot>
      <div class="sf-header-navigation-item__content">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import AwLink from "../../../atoms/AwLink/AwLink";
import AwMenuItem from "../../../molecules/AwMenuItem/AwMenuItem";

export default {
  name: "AwHeaderNavigationItem",
  components: {
    AwLink,
    AwMenuItem,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    link: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>
