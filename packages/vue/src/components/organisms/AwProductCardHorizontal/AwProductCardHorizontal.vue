<template>
  <div class="sf-product-card-horizontal">
    <div class="sf-product-card-horizontal__image-wrapper">
      <slot
        name="image"
        v-bind="{
          image,
          title,
          link,
          imageHeight,
          imageWidth,
          imageTag,
          nuxtImgConfig,
        }"
      >
        <AwLink
          :link="link"
          class="
            sf-product-card-horizontal__link
            sf-product-card-horizontal__link--image
          "
        >
          <template v-if="Array.isArray(image)">
            <AwImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card-horizontal__picture"
              :src="picture"
              :alt="title"
              :width="imageWidth"
              :height="imageHeight"
              :image-tag="imageTag"
              :nuxt-img-config="nuxtImgConfig"
            />
          </template>
          <AwImage
            v-else
            class="sf-product-card-horizontal__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
            :image-tag="imageTag"
            :nuxt-img-config="nuxtImgConfig"
          />
        </AwLink>
      </slot>
    </div>
    <div class="sf-product-card-horizontal__main">
      <div class="sf-product-card-horizontal__details">
        <slot name="title" v-bind="{ title, link }">
          <AwLink :link="link" class="sf-product-card-horizontal__link">
            <h3 class="sf-product-card-horizontal__title">
              {{ title }}
            </h3>
          </AwLink>
        </slot>
        <slot name="description">
          <p class="sf-product-card-horizontal__description desktop-only">
            {{ description }}
          </p>
        </slot>
        <div class="sf-product-card-horizontal__configuration">
          <slot name="configuration" />
        </div>
      </div>
      <div class="sf-product-card-horizontal__actions-wrapper">
        <slot name="price" v-bind="{ specialPrice, regularPrice }">
          <AwPrice
            :class="{ 'display-none': !regularPrice }"
            class="sf-product-card-horizontal__price"
            :regular="regularPrice"
            :special="specialPrice"
          />
        </slot>
        <slot name="reviews" v-bind="{ maxRating, scoreRating }">
          <div
            :class="{ 'display-none': !scoreRating }"
            class="sf-product-card-horizontal__reviews"
          >
            <AwRating
              v-if="typeof scoreRating === 'number'"
              class="sf-product-card-horizontal__rating"
              :max="maxRating"
              :score="scoreRating"
            />
            <AwButton
              :class="{ 'display-none': !reviewsCount }"
              :aria-label="`Read ${reviewsCount} reviews about ${title}`"
              class="sf-button--pure sf-product-card-horizontal__reviews-count"
              href="#"
              @click="$emit('click:reviews')"
            >
              ({{ reviewsCount }})
            </AwButton>
          </div>
        </slot>
        <div class="sf-product-card-horizontal__actions">
          <slot name="actions" />
        </div>
        <div class="sf-product-card-horizontal__add-to-cart">
          <slot name="add-to-cart">
            <AwAddToCart
              v-model="itemQuantity"
              class="sf-product-card-horizontal__add-to-cart desktop-only"
              @input="$emit('input', $event)"
              @click="$emit('click:add-to-cart', itemQuantity)"
            />
          </slot>
        </div>
      </div>
      <AwButton
        v-if="wishlistIcon !== false"
        :aria-label="`${ariaLabel} ${title}`"
        class="
          sf-button--pure
          smartphone-only
          sf-product-card-horizontal__wishlist-icon
        "
        @click="toggleIsInWishlist"
      >
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <AwIcon
            :icon="currentWishlistIcon"
            size="19px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </AwButton>
    </div>
  </div>
</template>
<script>
import AwPrice from "../../atoms/AwPrice/AwPrice.vue";
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwLink from "../../atoms/AwLink/AwLink.vue";
import AwRating from "../../atoms/AwRating/AwRating.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwAddToCart from "../../molecules/AwAddToCart/AwAddToCart.vue";

export default {
  name: "AwProductCardHorizontal",
  components: {
    AwPrice,
    AwRating,
    AwImage,
    AwIcon,
    AwLink,
    AwButton,
    AwAddToCart,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    image: {
      type: [Array, Object, String],
      default: "",
    },
    imageWidth: {
      type: [Number, String],
      default: null,
    },
    imageHeight: {
      type: [Number, String],
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    link: {
      type: [String, Object],
      default: null,
    },
    /**
     * Link element tag
     * @deprecated will be removed. Use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined,
    },
    scoreRating: {
      type: [Number, Boolean],
      default: false,
    },
    reviewsCount: {
      type: [Number, Boolean],
      default: false,
    },
    maxRating: {
      type: [Number, String],
      default: 5,
    },
    regularPrice: {
      type: [Number, String],
      default: null,
    },
    specialPrice: {
      type: [Number, String],
      default: null,
    },
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart",
    },
    isInWishlistIcon: {
      type: [String, Array],
      default: "heart_fill",
    },
    isInWishlist: {
      type: Boolean,
      default: false,
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
    imageTag: {
      type: String,
      default: "",
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      quantity: this.qty,
    };
  },
  computed: {
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon;
    },
    ariaLabel() {
      return this.isInWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    itemQuantity: {
      get() {
        return typeof this.quantity === "string"
          ? Number(this.quantity)
          : this.quantity;
      },
      set(newValue) {
        this.quantity = newValue;
      },
    },
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit("click:wishlist", !this.isInWishlist);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfProductCardHorizontal.scss";
</style>
