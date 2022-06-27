<template>
  <div
    class="sf-product-card"
    :class="{ 'has-colors': colors.length }"
    data-testid="product-card"
  >
    <div class="sf-product-card__image-wrapper">
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
        <AwButton
          :link="link"
          class="sf-button--pure sf-product-card__link"
          data-testid="product-link"
          aria-label="Go To Product"
          v-on="$listeners"
        >
          <template v-if="Array.isArray(image)">
            <AwImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card__picture"
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
            class="sf-product-card__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
            :image-tag="imageTag"
            :nuxt-img-config="nuxtImgConfig"
          />
        </AwButton>
      </slot>
      <slot name="colors" v-bind="{ colors }">
        <AwColorPicker
          :class="{ 'display-none': !colors.length }"
          class="sf-product-card__colors smartphone-only"
          label="Choose color"
          :is-open="openColorPicker"
          @click:toggle="toggleColorPicker"
        >
          <AwColor
            v-for="(color, i) in colors"
            :key="color.value"
            :color="color.color"
            :selected="color.selected"
            class="sf-product-card__color"
            :class="{ 'display-none': i > 3 && showBadge }"
            @click="handleSelectedColor(i)"
          />
          <AwBadge
            v-if="showBadge"
            class="sf-product-card__colors-badge color-secondary"
          >
            {{ `+${colors.length - 4}` }}
          </AwBadge>
        </AwColorPicker>
        <AwColorPicker
          :class="{ 'display-none': !colors.length }"
          class="sf-product-card__colors desktop-only"
          label="Choose color"
          :is-open="true"
        >
          <AwColor
            v-for="(color, i) in colors"
            :key="color.value"
            :color="color.color"
            :selected="color.selected"
            class="sf-product-card__color"
            :class="{ 'display-none': i > 3 && showBadge }"
            @click="handleSelectedColor(i)"
          />
          <AwBadge
            v-if="showBadge"
            class="sf-product-card__colors-badge color-secondary"
          >
            {{ `+${colors.length - 4}` }}
          </AwBadge>
        </AwColorPicker>
      </slot>
      <slot name="badge" v-bind="{ badgeLabel, badgeColor }">
        <AwBadge
          class="sf-product-card__badge"
          :class="[badgeColorClass, { 'display-none': !badgeLabel }]"
          >{{ badgeLabel }}</AwBadge
        >
      </slot>
      <AwButton
        :aria-label="`${ariaLabel} ${title}`"
        :class="[wishlistIconClasses, { 'display-none': !wishlistIcon }]"
        data-testid="product-wishlist-button"
        @click="toggleIsInWishlist"
      >
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <AwIcon
            v-if="currentWishlistIcon !== false"
            :icon="currentWishlistIcon"
            size="22px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </AwButton>
      <div :class="{ 'display-none': !showAddToCartButton }">
        <slot
          name="add-to-cart"
          v-bind="{
            isAddedToCart,
            showAddedToCartBadge,
            isAddingToCart,
            title,
          }"
        >
          <AwCircleIcon
            class="sf-product-card__add-button"
            :class="{ 'has-colors': colors.length }"
            :aria-label="`Add to Cart ${title}`"
            :has-badge="showAddedToCartBadge"
            :disabled="addToCartDisabled"
            data-testid="product-add-icon"
            @click="onAddToCart"
          >
            <span class="sf-product-card__add-button--icons">
              <transition
                v-if="!isAddingToCart && !isAddedToCart"
                name="sf-pulse"
                mode="out-in"
              >
                <slot name="add-to-cart-icon">
                  <AwIcon
                    key="add_to_cart"
                    icon="add_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
              <transition v-else name="sf-pulse" mode="out-in">
                <slot name="adding-to-cart-icon">
                  <AwIcon
                    key="added_to_cart"
                    icon="added_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
            </span>
          </AwCircleIcon>
        </slot>
      </div>
    </div>
    <slot name="title" v-bind="{ title, link }">
      <AwButton
        :link="link"
        class="sf-button--pure sf-product-card__link"
        data-testid="product-link"
        v-on="$listeners"
      >
        <span class="sf-product-card__title">
          {{ title }}
        </span>
      </AwButton>
    </slot>
    <slot name="price" v-bind="{ specialPrice, regularPrice }">
      <AwPrice
        :class="{ 'display-none': !regularPrice }"
        class="sf-product-card__price"
        :regular="regularPrice"
        :special="specialPrice"
      />
    </slot>
    <slot name="reviews" v-bind="{ maxRating, scoreRating }">
      <div
        :class="{ 'display-none': !scoreRating }"
        class="sf-product-card__reviews"
      >
        <AwRating
          v-if="typeof scoreRating === 'number'"
          class="sf-product-card__rating"
          :max="maxRating"
          :score="scoreRating"
        />
        <AwButton
          :class="{ 'display-none': !reviewsCount }"
          :aria-label="`Read ${reviewsCount} reviews about ${title}`"
          class="sf-button--pure sf-product-card__reviews-count"
          data-testid="product-review-button"
          @click="$emit('click:reviews')"
        >
          ({{ reviewsCount }})
        </AwButton>
      </div>
    </slot>
  </div>
</template>
<script>
import { colorsValues as SF_COLORS } from "@storefront-ui/shared/variables/colors";
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwPrice from "../../atoms/AwPrice/AwPrice.vue";
import AwRating from "../../atoms/AwRating/AwRating.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";
import AwCircleIcon from "../../atoms/AwCircleIcon/AwCircleIcon.vue";
import AwBadge from "../../atoms/AwBadge/AwBadge.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwColorPicker from "../../molecules/AwColorPicker/AwColorPicker.vue";
import AwColor from "../../atoms/AwColor/AwColor.vue";
export default {
  name: "AwProductCard",
  components: {
    AwPrice,
    AwRating,
    AwIcon,
    AwImage,
    AwCircleIcon,
    AwBadge,
    AwButton,
    AwColorPicker,
    AwColor,
  },
  props: {
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
    badgeLabel: {
      type: String,
      default: "",
    },
    badgeColor: {
      type: String,
      default: "",
    },
    colors: {
      type: Array,
      default: () => [],
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
     * @deprecated will be removed in 1.0.0 use slot to replace content
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
    showAddToCartButton: {
      type: Boolean,
      default: false,
    },
    isAddedToCart: {
      type: Boolean,
      deafult: false,
    },
    addToCartDisabled: {
      type: Boolean,
      default: false,
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
      isAddingToCart: false,
      openColorPicker: false,
    };
  },
  computed: {
    isSFColors() {
      return SF_COLORS.includes(this.badgeColor.trim());
    },
    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon;
    },
    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },
    ariaLabel() {
      return this.isInWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isInWishlist ? "on-wishlist" : ""}`;
    },
    showBadge() {
      return this.colors.length > 5;
    },
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit("click:wishlist", !this.isInWishlist);
    },
    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    },
    handleSelectedColor(colorIndex) {
      if (this.colors.length > 0) {
        this.colors.map((color, i) => {
          if (colorIndex === i) {
            this.$emit("click:colors", color);
            this.openColorPicker = false;
          }
        });
      }
    },
    toggleColorPicker() {
      this.openColorPicker = !this.openColorPicker;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfProductCard.scss";
</style>
