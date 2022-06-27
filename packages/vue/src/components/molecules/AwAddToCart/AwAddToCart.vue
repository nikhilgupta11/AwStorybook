<template>
  <div class="sf-add-to-cart">
    <slot name="quantity-select-input" v-bind="{ qty }">
      <AwQuantitySelector
        :qty="qty"
        aria-label="Quantity"
        :disabled="disabled"
        class="sf-add-to-cart__select-quantity"
        @input="$emit('input', $event)"
      />
    </slot>
    <slot name="add-to-cart-btn">
      <AwButton
        class="sf-add-to-cart__button"
        :disabled="disabled"
        v-on="$listeners"
      >
        Add to cart
      </AwButton>
    </slot>
  </div>
</template>
<script>
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwQuantitySelector from "../../atoms/AwQuantitySelector/AwQuantitySelector.vue";
export default {
  name: "AwAddToCart",
  components: {
    AwButton,
    AwQuantitySelector,
  },
  model: {
    prop: "qty",
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddToCart.scss";
</style>
