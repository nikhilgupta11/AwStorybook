<template functional>
  <nav
    :class="[data.class, data.staticClass, 'sf-breadcrumbs']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    aria-label="breadcrumb"
    v-on="listeners"
  >
    <ol class="sf-breadcrumbs__list">
      <li
        v-for="(breadcrumb, i) in props.breadcrumbs"
        :key="i"
        class="sf-breadcrumbs__list-item"
        :aria-current="
          $options.breadcrumbLast(props.breadcrumbs) === i && 'page'
        "
      >
        <template v-if="$options.breadcrumbLast(props.breadcrumbs) !== i">
          <slot name="link" v-bind="{ breadcrumb }">
            <component
              :is="injections.components.AwLink"
              class="sf-breadcrumbs__breadcrumb"
              :link="breadcrumb.link"
              :data-testid="breadcrumb.text"
            >
              {{ breadcrumb.text }}
            </component>
          </slot>
        </template>
        <template v-else>
          <slot name="current" v-bind="{ breadcrumb }">
            <component
              :is="injections.components.AwLink"
              :link="breadcrumb.link"
              class="sf-breadcrumbs__breadcrumb current"
            >
              {{ breadcrumb.text }}
            </component>
          </slot>
        </template>
      </li>
    </ol>
  </nav>
</template>
<script>
import AwLink from "../AwLink/AwLink.vue";
export default {
  name: "AwBreadcrumbs",
  inject: {
    components: {
      default: { AwLink },
    },
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
  breadcrumbLast(breadcrumbs) {
    return breadcrumbs.length - 1;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBreadcrumbs.scss";
</style>
