<template>
  <div :class="{ 'is-active': active === title }" class="sf-mega-menu-column">
    <slot name="title" v-bind="{ title, changeActive: megaMenu.changeActive }">
      <AwMenuItem
        :label="title"
        class="sf-mega-menu-column__header"
        @click="megaMenu.changeActive(title)"
      />
    </slot>
    <div class="sf-mega-menu-column__content">
      <slot />
    </div>
  </div>
</template>
<script>
import AwMenuItem from "../../../molecules/AwMenuItem/AwMenuItem.vue";
export default {
  name: "AwMegaMenuColumn",
  components: {
    AwMenuItem,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  inject: ["megaMenu"],
  computed: {
    active() {
      return this.megaMenu.active;
    },
  },
};
</script>
