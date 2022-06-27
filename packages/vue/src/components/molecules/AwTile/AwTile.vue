<template>
  <AwLink :link="link" class="sf-tile" :style="style">
    <slot name="title" v-bind="{ title }">
      <AwHeading
        :class="{ 'display-none': !title }"
        class="sf-tile__title"
        :level="3"
        :title="title"
      />
    </slot>
  </AwLink>
</template>
<script>
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";
import AwLink from "../../atoms/AwLink/AwLink.vue";
export default {
  name: "AwTile",
  components: {
    AwHeading,
    AwLink,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    background: {
      type: [String, Object],
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  computed: {
    style() {
      if (typeof this.background === String) {
        return {
          "--tile-background": `url('${this.background}')`,
        };
      } else {
        return {
          "--tile-background": `url(${this.background["desktop"]})`,
          "--tile-background-mobile": `url(${this.background["mobile"]})`,
        };
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfTile.scss";
</style>
