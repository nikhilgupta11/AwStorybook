<template>
  <li class="glide__slide sf-grouped-product-item">
    <div class="sf-grouped-product-item__aside">
      <slot
        name="image"
        v-bind="{
          image,
          title,
          imagePictureBreakpoint,
        }"
      >
        <AwImage
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          :image-picture-breakpoint="imagePictureBreakpoint"
          class="sf-grouped-product-item__image"
        />
      </slot>
    </div>
    <div class="sf-grouped-product-item__description">
      <slot name="title" v-bind="{ title }">
        <div class="sf-grouped-product-item__title-wraper">
          <AwLink :link="link" class="sf-grouped-product-item__title">{{
            title
          }}</AwLink>
        </div>
      </slot>
      <slot name="details" />
    </div>
    <slot name="configuration" />
    <div class="sf-grouped-product-item__info">
      <slot name="price" v-bind="{ priceSpecial, priceRegular }">
        <AwPrice
          :regular="priceRegular"
          :special="priceSpecial"
          class="sf-grouped-product-item__price"
        />
      </slot>
    </div>
    <slot name="input" v-bind="{ qty }">
      <AwQuantitySelector
        :qty="qty"
        aria-label="Quantity"
        class="sf-grouped-product-item__quantity-selector"
        @input="$emit('input', $event)"
      />
    </slot>
  </li>
</template>
<script>
import AwPrice from "../../../atoms/AwPrice/AwPrice.vue";
import AwImage from "../../../atoms/AwImage/AwImage.vue";
import AwQuantitySelector from "../../../atoms/AwQuantitySelector/AwQuantitySelector.vue";
import AwLink from "../../../atoms/AwLink/AwLink.vue";
export default {
  name: "AwGroupedProductItem",
  components: {
    AwImage,
    AwPrice,
    AwQuantitySelector,
    AwLink,
  },
  model: {
    prop: "qty",
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    imageWidth: {
      type: [Number, String],
      default: 328,
    },
    imageHeight: {
      type: [Number, String],
      default: 448,
    },
    imagePictureBreakpoint: {
      type: Number,
      default: 576,
    },
    title: {
      type: String,
      default: "",
    },
    priceRegular: {
      type: [Number, String],
      default: "",
    },
    priceSpecial: {
      type: [Number, String],
      default: "",
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
    link: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>
