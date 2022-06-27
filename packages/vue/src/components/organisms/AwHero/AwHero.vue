<template>
  <div class="sf-hero">
    <div ref="glide" class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides sf-hero__slides">
          <slot />
        </ul>
      </div>
    </div>
    <div
      :class="{ 'display-none': numberOfPages <= 1 }"
      class="sf-hero__control--left"
    >
      <slot name="prev" v-bind="{ go: () => go('prev') }">
        <AwArrow
          class="sf-arrow sf-arrow--transparent"
          aria-label="previous"
          data-testid="hero-prev-button"
          @click.stop="go('prev')"
        />
      </slot>
    </div>
    <div
      :class="{ 'display-none': numberOfPages <= 1 }"
      class="sf-hero__control--right"
    >
      <slot name="next" v-bind="{ go: () => go('next') }">
        <AwArrow
          class="sf-arrow sf-arrow--right sf-arrow--transparent"
          aria-label="next"
          data-testid="hero-next-button"
          @click.stop="go('next')"
        />
      </slot>
    </div>
    <div
      :class="{ 'display-none': numberOfPages <= 1 }"
      class="sf-hero__bullets"
    >
      <slot name="bullets" v-bind="{ numberOfPages, page, go }">
        <AwBullets
          :total="numberOfPages"
          :current="page - 1"
          data-testid="hero-bullets"
          @click="go($event)"
        />
      </slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import AwHeroItem from "./_internal/AwHeroItem.vue";
import AwArrow from "../../atoms/AwArrow/AwArrow.vue";
import AwBullets from "../../atoms/AwBullets/AwBullets.vue";
import Glide from "@glidejs/glide";
Vue.component("AwHeroItem", AwHeroItem);
export default {
  name: "AwHero",
  components: {
    AwArrow,
    AwBullets,
  },
  props: {
    sliderOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0,
      },
    };
  },
  computed: {
    mergedOptions() {
      return {
        ...this.defaultOptions,
        ...this.sliderOptions,
      };
    },
    numberOfPages() {
      return this.$slots.default
        ? this.$slots.default.filter((slot) => slot.tag).length
        : 0;
    },
    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }
      return 1;
    },
  },
  mounted() {
    if (this.numberOfPages > 1) {
      this.$nextTick(() => {
        if (!this.$slots.default) return;
        const glide = new Glide(this.$refs.glide, this.mergedOptions);
        glide.mount();
        this.glide = glide;
      });
    }
  },
  methods: {
    go(direct) {
      if (!this.glide) return;
      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;
        case "next":
          this.glide.go(">");
          break;
        default:
          this.glide.go(`=${direct}`);
          break;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHero.scss";
</style>
