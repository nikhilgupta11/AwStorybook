<template>
  <div class="sf-order-summary">
    <slot name="heading" v-bind="{ orderTitle, orderTitleLevel }">
      <AwHeading
        :title="orderTitle"
        :level="orderTitleLevel"
        class="
          sf-heading--left sf-heading--no-underline
          sf-order-summary__heading
        "
      />
    </slot>
    <div class="highlighted highlighted--total">
      <slot
        name="summary"
        v-bind="{
          totalItems,
          subtotal,
          total,
          shippingMethod,
          propertiesNames,
        }"
      >
        <AwProperty
          :name="propertiesNames[0]"
          :value="totalItems"
          class="
            sf-property--full-width sf-property--large
            sf-order-summary__property
          "
        />
        <AwProperty
          :name="propertiesNames[1]"
          :value="subtotal"
          class="
            sf-property--full-width sf-property--large
            sf-order-summary__property
          "
        />
        <AwProperty
          :name="propertiesNames[2]"
          :value="shippingMethod.price"
          class="
            sf-property--full-width sf-property--large
            sf-order-summary__property
          "
        />
        <AwDivider class="sf-order-summary__divider" />
        <AwProperty
          :name="propertiesNames[3]"
          :value="total"
          class="
            sf-property--full-width sf-property--large
            sf-order-summary__property
          "
        />
      </slot>
    </div>
    <div class="highlighted sf-order-summary__promo-code">
      <slot name="promo" v-bind="{ promoCode }">
        <AwInput
          v-model="promoCode"
          name="promoCode"
          label="Enter promo code"
          class="sf-input--filled sf-order-summary__promo-code-input"
        />
        <AwButton
          class="sf-order-summary__promo-code-button"
          data-testid="apply-button"
          @click="$emit('click:apply-code')"
        >
          Apply
        </AwButton>
      </slot>
    </div>
    <div class="sf-order-summary__characteristics">
      <slot name="characteristics" v-bind="{ characteristics }">
        <AwCharacteristic
          v-for="characteristic in characteristics"
          :key="characteristic.title"
          :title="characteristic.title"
          :description="characteristic.description"
          :icon="characteristic.icon"
          size-icon="32px"
          color-icon="green-primary"
          class="sf-order-summary__characteristics-item"
        >
        </AwCharacteristic>
      </slot>
    </div>
  </div>
</template>
<script>
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwDivider from "../../atoms/AwDivider/AwDivider.vue";
import AwProperty from "../../atoms/AwProperty/AwProperty.vue";
import AwCharacteristic from "../../molecules/AwCharacteristic/AwCharacteristic.vue";
import AwInput from "../../atoms/AwInput/AwInput.vue";
export default {
  name: "AwOrderSummary",
  components: {
    AwHeading,
    AwButton,
    AwDivider,
    AwProperty,
    AwCharacteristic,
    AwInput,
  },
  props: {
    orderTitle: {
      type: String,
      default: "Order review",
    },
    orderTitleLevel: {
      type: Number,
      default: 2,
    },
    order: {
      type: Object,
      default: () => ({}),
    },
    propertiesNames: {
      type: Array,
      default: () => ["Products", "Subtotal", "Shipping", "Total price"],
    },
    characteristics: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      promoCode: "",
    };
  },
  computed: {
    products() {
      return this.order.orderItems;
    },
    totalItems() {
      return this.products
        ? this.products.reduce((previous, current) => {
            return previous + current.qty;
          }, 0)
        : 0;
    },
    shipping() {
      return this.order.shipping || {};
    },
    shippingMethod() {
      return this.shipping.shippingMethod || { price: "" };
    },
    subtotal() {
      const products = this.products;
      const subtotal = this.products
        ? products.reduce((previous, current) => {
            const qty = current.qty;
            const price = current.price.special
              ? current.price.special
              : current.price.regular;
            const total = qty * parseFloat(price.replace("$", ""));
            return previous + total;
          }, 0)
        : 0;
      return "$" + subtotal.toFixed(2);
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""));
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""));
      const total = subtotal + (isNaN(shipping) ? 0 : shipping);
      return "$" + total.toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfOrderSummary.scss";
</style>
