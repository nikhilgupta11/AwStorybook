<template>
  <div data-testid="payment">
    <AwHeading
      title="Billing address"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <AwCheckbox
        v-model="sameAsShipping"
        :value="sameAsShipping"
        label="Copy address data from shipping"
        name="copyShippingAddress"
        class="form__element form__checkbox"
        @change="updateField('sameAsShipping', $event)"
      />
      <AwInput
        v-model="firstName"
        :value="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
        @input="updateField('firstName', $event)"
      />
      <AwInput
        v-model="lastName"
        :value="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('lastName', $event)"
      />
      <AwInput
        v-model="streetName"
        :value="streetName"
        label="Street name"
        name="streetName"
        class="form__element"
        required
        @input="updateField('streetName', $event)"
      />
      <AwInput
        v-model="apartment"
        :value="apartment"
        label="House/Apartment number"
        name="apartment"
        class="form__element"
        required
        @input="updateField('apartment', $event)"
      />
      <AwInput
        v-model="city"
        :value="city"
        label="City"
        name="city"
        class="form__element form__element--half"
        required
        @input="updateField('city', $event)"
      />
      <AwInput
        v-model="state"
        :value="state"
        label="State/Province"
        name="state"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('state', $event)"
      />
      <AwInput
        v-model="zipCode"
        :value="zipCode"
        label="Zip-code"
        name="zipCode"
        class="form__element form__element--half"
        required
        @input="updateField('zipCode', $event)"
      />
      <AwSelect
        v-model="country"
        :value="country"
        placeholder="Country"
        class="
          form__element
          form__element--half
          form__element--half-even
          form__select
          sf-select--underlined
        "
        required
        data-testid="country"
        @change="updateField('country', $event)"
      >
        <AwSelectOption
          v-for="countryOption in countries"
          :key="countryOption"
          :value="countryOption"
        >
          {{ countryOption }}
        </AwSelectOption>
      </AwSelect>
      <AwInput
        v-model="phoneNumber"
        :value="phoneNumber"
        label="Phone number"
        name="phone"
        class="form__element"
        required
        @input="updateField('phoneNumber', $event)"
      />
      <AwCheckbox
        v-model="invoice"
        :value="invoice"
        label="I want to generate invoice"
        name="getInvoice"
        class="form__element form__checkbox"
        @change="updateField('invoice', $event)"
      />
    </div>
    <AwHeading
      title="Payment methods"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <div class="payment-methods" data-testid="payment-methods">
        <AwRadio
          v-for="item in paymentMethods"
          :key="item.value"
          v-model="paymentMethod"
          :label="item.label"
          :value="item.value"
          name="paymentMethod"
          :description="item.description"
          class="form__radio payment-method"
          @input="updateField('paymentMethod', $event)"
        >
          <template #label>
            <div class="sf-radio__label">
              <template
                v-if="
                  item.value !== 'debit' &&
                  item.value !== 'mastercard' &&
                  item.value !== 'electron'
                "
              >
                {{ item.label }}
              </template>
              <template v-else>
                <AwImage
                  :src="`/assets/storybook/checkout/${item.value}.png`"
                  :alt="item.value"
                  class="payment-image"
                  :lazy="false"
                />
              </template>
            </div>
          </template>
        </AwRadio>
      </div>
      <transition name="sf-fade">
        <div v-if="isCreditCard" class="credit-card-form">
          <AwInput
            v-model="cardNumber"
            :value="cardNumber"
            name="cardNumber"
            label="Card number"
            class="credit-card-form__input"
            @input="updateField('cardNumber', $event)"
          />
          <AwInput
            v-model="cardHolder"
            :value="cardHolder"
            label="Card holder"
            name="cardHolder"
            class="credit-card-form__input"
            @input="updateField('cardHolder', $event)"
          />
          <div class="credit-card-form__group">
            <span
              class="
                credit-card-form__label
                credit-card-form__label--small
                credit-card-form__label--required
              "
              >Expiry date:</span
            >
            <div class="credit-card-form__element">
              <AwSelect
                v-model="cardMonth"
                :value="cardMonth"
                label="Month"
                class="
                  credit-card-form__input credit-card-form__input--with-spacer
                  form__select
                  sf-select--underlined
                "
                @change="updateField('cardMonth', $event)"
              >
                <AwSelectOption
                  v-for="monthOption in months"
                  :key="monthOption"
                  :value="monthOption"
                >
                  {{ monthOption }}
                </AwSelectOption>
              </AwSelect>
              <AwSelect
                v-model="cardYear"
                :value="cardYear"
                label="Year"
                class="
                  credit-card-form__input
                  form__select
                  sf-select--underlined
                "
                @change="updateField('cardYear', $event)"
              >
                <AwSelectOption
                  v-for="yearOption in years"
                  :key="yearOption"
                  :value="yearOption"
                >
                  {{ yearOption }}
                </AwSelectOption>
              </AwSelect>
            </div>
          </div>
          <div class="credit-card-form__group">
            <AwInput
              v-model="cardCVC"
              :value="cardCVC"
              type="number"
              label="Code CVC"
              name="cardCVC"
              class="
                credit-card-form__input
                credit-card-form__input--small
                credit-card-form__input--with-spacer
              "
              @input="updateField('cardCVC', $event)"
            />
            <AwButton class="sf-button--text credit-card-form__button"
              >Where can I find CVC code</AwButton
            >
          </div>
          <AwCheckbox
            v-model="cardKeep"
            :value="cardKeep"
            name="keepcard"
            label="Save this card for other purchases"
            class="credit-card-form__element form__checkbox"
            @change="updateField('cardKeep', $event)"
          />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {
  AwHeading,
  AwInput,
  AwButton,
  AwSelect,
  AwRadio,
  AwImage,
  AwCheckbox,
} from "@storefront-ui/vue";
export default {
  name: "Payment",
  components: {
    AwHeading,
    AwInput,
    AwButton,
    AwSelect,
    AwRadio,
    AwImage,
    AwCheckbox,
  },
  props: {
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    shipping: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      sameAsShipping: false,
      firstName: "",
      lastName: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      paymentMethod: "",
      invoice: false,
      cardNumber: "",
      cardHolder: "",
      cardMonth: "",
      cardYear: "",
      cardCVC: "",
      cardKeep: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      years: ["2020", "2021", "2022", "2025"],
      countries: [],
    };
  },
  computed: {
    isCreditCard() {
      return ["debit", "mastercard", "electron"].includes(this.paymentMethod);
    },
  },
  watch: {
    payment: {
      handler() {
        this.sameAsShipping = this.value.sameAsShipping;
        this.streetName = this.value.streetName;
        this.apartment = this.value.apartment;
        this.city = this.value.city;
        this.state = this.value.state;
        this.zipCode = this.value.zipCode;
        this.country = this.value.country;
        this.phoneNumber = this.value.phoneNumber;
        this.paymentMethod = this.value.paymentMethod;
        this.cardNumber = this.value.card.number;
        this.cardHolder = this.value.card.holder;
        this.cardMonth = this.value.card.month;
        this.cardYear = this.value.card.year;
        this.cardCVC = this.value.card.cvc;
        this.cardKeep = this.value.card.keep;
      },
      immediate: true,
    },
    sameAsShipping: {
      handler(value) {
        if (value) {
          this.firstName = this.shipping.firstName;
          this.lastName = this.shipping.lastName;
          this.streetName = this.shipping.streetName;
          this.apartment = this.shipping.apartment;
          this.city = this.shipping.city;
          this.state = this.shipping.state;
          this.zipCode = this.shipping.zipCode;
          this.country = this.shipping.country;
          this.phoneNumber = this.shipping.phoneNumber;
          this.paymentMethod = this.shipping.paymentMethod;
        } else {
          this.firstName = "";
          this.lastName = "";
          this.streetName = "";
          this.apartment = "";
          this.city = "";
          this.state = "";
          this.zipCode = "";
          this.country = "";
          this.phoneNumber = "";
          this.paymentMethod = "";
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue,
      });
    },
    getCountries() {
      fetch("https://restcountries.eu/rest/v2/all?fields=name")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => country.name);
          this.countries = countries;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-xl) 0 var(--spacer-lg);
  --heading-title-font-weight: var(--font-weight--bold);
  &:not(:first-of-type) {
    --heading-padding: var(--spacer-xl) 0;
    border-bottom: 2px solid var(--c-light);
  }
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.form {
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    &:last-of-type {
      margin: 0;
    }
  }
  &__checkbox {
    margin: 0 0 var(--spacer-xl) 0;
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--base);
    --select-dropdown-color: blue;
    ::v-deep .sf-select__dropdown {
      margin: 0 0 2px 0;
      font-size: var(--font-size--base);
      font-family: var(--font-family--secondary);
      color: var(--c-link);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-base);
        }
      }
    }
    &__checkbox {
      margin: 0 0 var(--spacer-xl) 0;
    }
    &__action-button {
      --button-width: 25rem;
    }
  }
}
.payment-methods {
  border-bottom: solid 2px var(--c-light);
  padding: 0 0 var(--spacer-base) 0;
  margin-bottom: var(--spacer-lg);
  @include for-desktop {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacer-xl);
    padding: var(--spacer-xs) 0;
    width: 100%;
  }
}
.payment-method {
  --radio-container-align-items: center;
  --radio-container-padding: var(--spacer-base) var(--spacer-sm) 0;
  --ratio-content-margin: 0 0 0 var(--spacer-lg);
  --radio-background: transparent;
  color: var(--c-link);
  white-space: nowrap;
  ::v-deep .sf-image {
    width: 3.125rem;
  }
  @include for-desktop {
    --radio-container-padding: var(--spacer-sm);
  }
}
.credit-card-form {
  width: 100%;
  &__group {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  &__element {
    flex: 1;
  }
  &__label {
    font-size: var(--font-size--base);
    font-family: var(--font-family--secondary);
    color: var(--c-link);
    padding: var(--spacer-sm) 0 0 0;
    flex: 1;
  }
  &__button {
    --button-padding: var(--spacer-base) 0 0 var(--spacer-sm);
    text-align: right;
    flex: 1;
  }
  &__input {
    flex: 1;
    padding: 0 0 var(--spacer-sm) 0;
  }
  @include for-desktop {
    width: 38.125rem;
    &__element {
      display: flex;
    }
    &__label {
      padding: var(--spacer-sm) var(--spacer-sm) 0 0;
      &--small {
        flex: 0 0 calc(100% / 3);
      }
    }
    &__button {
      text-align: left;
    }
    &__input {
      align-self: center;
      &--with-spacer {
        margin: 0 var(--spacer-lg) 0 0;
      }
      &--small {
        flex: 0 0 calc(100% / 3);
      }
    }
  }
}
</style>
