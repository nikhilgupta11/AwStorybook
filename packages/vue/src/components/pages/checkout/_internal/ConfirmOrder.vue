<template>
  <div id="confirm-order">
    <AwHeading
      title="Order details"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <AwTable class="sf-table--bordered table">
      <AwTableHeading class="table__row">
        <AwTableHeader class="table__header table__image">Item</AwTableHeader>
        <AwTableHeader
          v-for="tableHeader in tableHeaders"
          :key="tableHeader"
          class="table__header"
          :class="{ table__description: tableHeader === 'Description' }"
          >{{ tableHeader }}
        </AwTableHeader>
      </AwTableHeading>
      <AwTableRow
        v-for="(product, index) in products"
        :key="index"
        class="table__row"
        data-testid="product-table-row"
      >
        <AwTableData class="table__image">
          <AwImage
            :src="product.image"
            :alt="product.title"
            data-testid="product-image-table-data"
          />
        </AwTableData>
        <AwTableData class="table__data"
          >{{ product.configuration[0].value }}
        </AwTableData>

        <AwTableData
          class="table__description"
          data-testid="product-description-table-data"
        >
          <div class="product-title">{{ product.title }}</div>
          <div class="product-sku">{{ product.sku }}</div>
        </AwTableData>
        <AwTableData class="table__data">{{ product.qty }}</AwTableData>

        <AwTableData class="table__data"
          >{{ product.configuration[1].value }}
        </AwTableData>
        <AwTableData class="table__data">
          <AwPrice
            :regular="product.price.regular"
            :special="product.price.special"
            class="product-price"
          />
        </AwTableData>
      </AwTableRow>
    </AwTable>
    <div class="summary smartphone-only">
      <div class="summary__content">
        <AwProperty
          name="Subtotal"
          :value="subtotal"
          class="sf-property--full-width property"
        />
        <AwProperty
          name="Shipping"
          :value="shippingMethod.price"
          class="sf-property--full-width property"
        />
        <AwDivider class="divider" />
        <AwProperty
          name="Total price"
          :value="total"
          class="sf-property--full-width property"
        />
        <AwCheckbox v-model="terms" name="terms" class="summary__terms">
          <template #label>
            <div class="sf-checkbox__label">
              I agree to <a href="#">Terms and conditions</a>
            </div>
          </template>
        </AwCheckbox>
      </div>
    </div>
    <div class="totals desktop-only">
      <AwProperty
        name="Subtotal"
        :value="subtotal"
        class="sf-property--full-width property property__subtotal"
      >
      </AwProperty>
      <AwProperty
        name="Shipping"
        :value="shippingMethod.price"
        class="sf-property--full-width property"
      >
      </AwProperty>
      <AwDivider class="divider" />
      <AwProperty
        name="Total price"
        :value="total"
        class="sf-property--full-width sf-property--large property__total"
      >
      </AwProperty>
      <AwCheckbox v-model="terms" name="terms" class="totals__terms">
        <template #label>
          <div class="sf-checkbox__label">
            I agree to <AwLink href="#">Terms and conditions</AwLink>
          </div>
        </template>
      </AwCheckbox>
    </div>
  </div>
</template>
<script>
import {
  AwHeading,
  AwTable,
  AwCheckbox,
  AwDivider,
  AwImage,
  AwPrice,
  AwProperty,
  AwLink,
} from "@storefront-ui/vue";
export default {
  name: "ReviewOrder",
  components: {
    AwHeading,
    AwTable,
    AwCheckbox,
    AwDivider,
    AwImage,
    AwPrice,
    AwProperty,
    AwLink,
  },
  props: {
    order: {
      type: Object,
      default: () => ({}),
    },
    shippingMethods: {
      type: Array,
      default: () => [],
    },
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    characteristics: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      terms: false,
      promoCode: "",
      tableHeaders: ["Size", "Description", "Quantity", "Colour", "Amount"],
    };
  },
  computed: {
    products() {
      return this.order.products;
    },
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      const shippingMethod = this.shipping.shippingMethod;
      const method = this.shippingMethods.find(
        (method) => method.value === shippingMethod
      );
      return method ? method : { price: "$0.00" };
    },
    payment() {
      return this.order.payment;
    },
    paymentMethod() {
      const paymentMethod = this.payment.paymentMethod;
      const method = this.paymentMethods.find(
        (method) => method.value === paymentMethod
      );
      return method ? method : { label: "" };
    },
    subtotal() {
      const products = this.products;
      const subtotal = products.reduce((previous, current) => {
        const qty = current.qty;
        const price = current.price.special
          ? current.price.special
          : current.price.regular;
        const total = qty * parseFloat(price.replace("$", ""));
        return previous + total;
      }, 0);
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
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-xl) 0 var(--spacer-base);
  --heading-title-font-weight: var(--font-weight--bold);
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.table {
  --table-row-padding: var(--spacer-sm) 0 var(--spacer-xs);
  &__header:last-child,
  :nth-of-type(5) {
    text-align: right;
  }
  &__header:nth-of-type(odd),
  .sf-table__data:nth-of-type(odd) {
    padding-bottom: var(--spacer-sm);
  }
  &__row {
    justify-content: space-between;
  }
  &__data:nth-of-type(5) {
    text-align: right;
  }
  &__image {
    --image-width: 2.75rem;
    text-align: left;
  }
  @include for-desktop {
    margin: 0 0 var(--spacer-base) 0;
    --table-heading-padding: var(--spacer-sm) 0;
    &__header {
      &:last-of-type {
        margin-right: var(--spacer-xs);
      }
      &:nth-of-type(5) {
        text-align: left;
      }
      &__description {
        order: -1;
      }
    }
    &__header:nth-of-type(odd),
    .sf-table__data:nth-of-type(odd) {
      padding-bottom: 0;
    }
    &__data {
      &:nth-of-type(5) {
        text-align: left;
      }
      &:last-of-type {
        margin-right: var(--spacer-xs);
      }
    }
    &__description {
      text-align: left;
      flex: 0 0 15rem;
      order: -1;
    }
    &__image {
      --image-width: 5.125rem;
      order: -1;
      text-align: center;
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}
.product-sku {
  font-family: var(--font-family--primary);
  color: var(--c-text-muted);
  @include for-desktop {
    margin-top: var(--spacer-sm);
  }
}
.product-price {
  --price-regular-font-size: var(--font-size--base);
  --price-regular-font-weight: var(--font-weight--normal);
  --price-special-font-weight: var(--font-weight--normal);
  text-align: right;
  display: flex;
  flex-direction: column;
  ::v-deep .sf-price__old {
    display: none;
  }
}
.totals {
  &__terms {
    margin-top: var(--spacer-xl);
    --link-color: var(--c-link);
    --link-font-family: var(--font-family--primary);
    --link-font-weight: var(--font-weight--normal);
  }
  &__element:first-child {
    margin-bottom: var(--spacer-base);
  }
}
.property {
  margin: 0 0 var(--spacer-base) 0;
  --property-name-font-weight: var(--font-weight--medium);
  --property-name-font-size: var(--font-size--lg);
  --property-value-font-weight: var(--font-weight--bold);
  --property-value-font-size: var(--h4-font-size);
  &__total {
    margin: 0 0 var(--spacer-xl) 0;
    --property-name-color: var(--c-text);
  }
  @include for-desktop {
    margin: 0 0 var(--spacer-sm) 0;
    &__subtotal {
      margin: var(--spacer-xl) 0 var(--spacer-base);
    }
    &__total {
      --property-name-font-weight: var(--font-weight--bold);
      --property-name-font-size: var(--h4-font-size);
      --property-value-font-weight: var(--font-weight--bold);
      --property-value-font-size: var(--h4-font-size);
      padding: var(--spacer-base) 0 0 0;
    }
  }
}
.divider {
  --divider-border-color: var(--c-primary);
  --divider-width: 100%;
  --divider-margin: 0 0 var(--spacer-base) 0;
}
.summary {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacer-xl) 0;
  }
  &__terms {
    margin: 0 0 0 var(--spacer-xs);
  }
}
.content {
  margin: 0 0 var(--spacer-base) 0;
  color: var(--c-text);
  &__label {
    font-weight: var(--font-weight--normal);
  }
}
</style>
