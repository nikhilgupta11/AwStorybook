<template>
  <div class="sf-content-pages">
    <AwBar
      :back="isActive"
      :title="active ? active : title"
      class="smartphone-only"
      @click:back="updatePage()"
    />
    <section
      :class="{ 'is-active': isActive }"
      class="sf-content-pages__section"
    >
      <div class="sf-content-pages__sidebar">
        <h1 class="sf-content-pages__title desktop-only">{{ title }}</h1>
        <div
          v-for="(category, key) in categories"
          :key="`${category.title}-${key}`"
        >
          <h2
            :class="{ 'display-none': !category.title }"
            class="sf-content-pages__category-title"
          >
            {{ category.title }}
          </h2>
          <AwList class="sf-content-pages__list">
            <AwListItem
              v-for="(page, itemKey) in category.items"
              :key="`${page.title}-${itemKey}`"
              class="sf-content-pages__list-item"
            >
              <slot name="menu-item" v-bind="{ updatePage, page, active }">
                <AwMenuItem
                  :class="{ 'is-active': isPageActive(page) }"
                  :label="page.title"
                  class="sf-content-pages__menu"
                  @click="updatePage(page.title)"
                >
                  <template #icon>
                    <AwIcon
                      :class="{ 'display-none': !page.icon }"
                      :icon="page.icon"
                      class="sf-menu-item__icon"
                      color="#686d7d"
                      size="xxs"
                    />
                  </template>
                </AwMenuItem>
              </slot>
            </AwListItem>
          </AwList>
        </div>
      </div>
      <div class="sf-content-pages__content">
        <slot />
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import AwContentPage from "./_internal/AwContentPage.vue";
import AwContentCategory from "./_internal/AwContentCategory.vue";
Vue.component("AwContentPage", AwContentPage);
Vue.component("AwContentCategory", AwContentCategory);
import AwList from "../AwList/AwList.vue";
import AwMenuItem from "../../molecules/AwMenuItem/AwMenuItem.vue";
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwBar from "../../molecules/AwBar/AwBar.vue";
export default {
  name: "AwContentPages",
  components: {
    AwList,
    AwMenuItem,
    AwIcon,
    AwBar,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    active: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    categories() {
      const items = [];
      const orphans = { items: [] };
      const reduceOrphans = () => {
        if (orphans.items.length > 0) {
          const category = { ...orphans };
          items.push(category);
          orphans.items = [];
        }
      };
      this.items.forEach((item) => {
        if (item.items) {
          reduceOrphans();
          const category = { ...item };
          items.push(category);
          return;
        }
        orphans.items.push(item);
      });
      reduceOrphans();
      return items;
    },
    isActive() {
      return this.active.length > 0;
    },
  },
  provide() {
    const provided = {};
    Object.defineProperty(provided, "active", {
      get: () => this.active,
    });
    return { provided };
  },
  methods: {
    updatePage(title) {
      this.$emit("click:change", title);
    },
    isPageActive(page) {
      return page.title.toLowerCase() === this.active.toLowerCase();
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfContentPages.scss";
</style>
