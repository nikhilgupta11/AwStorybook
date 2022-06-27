<template>
  <div id="my-account">
    <AwBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <AwContentPages
      title="My Account"
      :active="activePage"
      class="my-account"
      @click:change="changeActivePage"
    >
      <AwContentCategory title="Personal Details">
        <AwContentPage title="My profile" data-testid="my-profile">
          <AwMyProfile
            :account="account"
            data-testid="my-profile-tabs"
            @update:personal="account = { ...account, ...$event }"
            @update:password="account = { ...account, ...$event }"
          />
        </AwContentPage>
        <AwContentPage title="Shipping details" data-testid="shipping-details">
          <AwShippingDetails
            :account="account"
            :countries="countries"
            data-testid="shipping-details-tabs"
            @update:shipping="account = { ...account, ...$event }"
          />
        </AwContentPage>
        <AwContentPage title="Newsletter">
          <AwMyNewsletter />
        </AwContentPage>
      </AwContentCategory>
      <AwContentCategory title="Order details">
        <AwContentPage title="Order history">
          <AwOrderHistory :orders="account.orders" />
        </AwContentPage>
      </AwContentCategory>
      <AwContentPage title="Log out" />
    </AwContentPages>
  </div>
</template>
<script>
import AwBreadcrumbs from "../../atoms/AwBreadcrumbs/AwBreadcrumbs.vue";
import AwContentPages from "../../organisms/AwContentPages/AwContentPages.vue";
import AwMyProfile from "../../templates/AwMyProfile/AwMyProfile.vue";
import AwShippingDetails from "../../templates/AwShippingDetails/AwShippingDetails.vue";
import AwMyNewsletter from "../../templates/AwMyNewsletter/AwMyNewsletter.vue";
import AwOrderHistory from "../../templates/AwOrderHistory/AwOrderHistory.vue";
// import { SfBreadcrumbs, SfContentPages } from "@storefront-ui/vue";
// import {
//   SfMyProfile,
//   SfShippingDetails,
//   SfMyNewsletter,
//   SfOrderHistory,
// } from "@storefront-ui/vue";
import { countries } from "../../templates/internalData.js";
export default {
  name: "MyAccount",
  components: {
    AwBreadcrumbs,
    AwContentPages,
    AwMyProfile,
    AwShippingDetails,
    AwMyNewsletter,
    AwOrderHistory,
  },
  data() {
    return {
      activePage: "My profile",
      breadcrumbs: [
        {
          text: "Home",
          link: "#",
        },
        {
          text: "My Account",
          link: "#",
        },
      ],
      account: {
        firstName: "John",
        lastName: "Dog",
        email: "johndog@email.com",
        password: "a*23Et",
        shipping: [
          {
            firstName: "John",
            lastName: "Dog",
            streetName: "Sezame Street",
            apartment: "24/193A",
            city: "Wroclaw",
            state: "Lower Silesia",
            zipCode: "53-540",
            country: "Poland",
            phoneNumber: "(00)560 123 456",
          },
          {
            firstName: "John",
            lastName: "Dog",
            streetName: "Sezame Street",
            apartment: "20/193A",
            city: "Wroclaw",
            state: "Lower Silesia",
            zipCode: "53-603",
            country: "Poland",
            phoneNumber: "(00)560 123 456",
          },
        ],
        orders: [
          ["#45", "23th June, 2021", "Visa card", "$412.00", "Finalised"],
          ["#46", "26th June, 2021", "Paypal", "$132.00", "Finalised"],
          ["#47", "28th June, 2021", "Mastercard", "$12.00", "Finalised"],
          ["#48", "28th June, 2021", "Paypal", "$20.00", "In process"],
        ],
      },
      countries,
    };
  },
  methods: {
    changeActivePage(title) {
      if (title === "Log out") {
        alert("You are logged out!");
        return;
      }
      this.activePage = title;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#my-account {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    padding: 0 var(--spacer-sm);
    margin: 0 auto;
  }
}
.my-account {
  @include for-mobile {
    --content-pages-sidebar-category-title-font-weight: var(
      --font-weight--normal
    );
    --content-pages-sidebar-category-title-margin: var(--spacer-sm)
      var(--spacer-sm) var(--spacer-sm) var(--spacer-base);
  }
  @include for-desktop {
    --content-pages-sidebar-category-title-margin: var(--spacer-xl) 0 0 0;
  }
}
.breadcrumbs {
  padding: var(--spacer-base) 0 var(--spacer-lg);
}
</style>

<include-source />
