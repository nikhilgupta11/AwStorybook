<template>
  <AwTabs
    class="sf-order-history"
    :open-tab="1"
    data-testid="order-history-tabs"
  >
    <AwTab :title="tabTitle" data-testid="my-orders">
      <slot
        name="order-history-description"
        v-bind="{ orderHistoryDescription }"
      >
        <p class="message">
          {{ orderHistoryDescription }}
        </p>
      </slot>
      <div v-if="orders && orders.length === 0" class="no-orders">
        <slot name="no-orders" v-bind="{ noOrdersDescription }">
          <p class="no-orders__title">{{ noOrdersDescription }}</p>
          <AwButton class="no-orders__button" @click="$emit('no-orders')">
            {{ noOrdersButtonText }}
          </AwButton>
        </slot>
      </div>
      <div v-else>
        <slot name="table" v-bind="{ tableHeaders, orders }">
          <AwTable class="orders">
            <AwTableHeading>
              <slot name="table-headers">
                <AwTableHeader
                  v-for="tableHeader in tableHeaders"
                  :key="tableHeader"
                  >{{ tableHeader }}
                </AwTableHeader>
                <slot name="action-header">
                  <AwTableHeader class="orders__element--right">
                    <span class="smartphone-only">Download</span>
                    <AwButton
                      class="desktop-only sf-button--text orders__download-all"
                      data-testid="download-all-button"
                      @click="$emit('download-all')"
                      >Download all
                    </AwButton>
                  </AwTableHeader>
                </slot>
              </slot>
            </AwTableHeading>
            <AwTableRow v-for="order in ordersHistory" :key="order[0]">
              <slot name="table-data">
                <AwTableData v-for="(data, key) in order" :key="key">
                  <template v-if="key === 4">
                    <span
                      :class="{
                        'text-success': data === 'Finalised',
                        'text-warning': data === 'In process',
                      }"
                      >{{ data }}</span
                    >
                  </template>
                  <template v-else>{{ data }}</template>
                </AwTableData>
                <slot name="action-rows">
                  <AwTableData class="orders__view orders__element--right">
                    <AwButton
                      class="sf-button--text smartphone-only"
                      @click="$emit('download')"
                      >Download</AwButton
                    >
                    <AwButton
                      class="sf-button--text desktop-only"
                      data-testid="view-details-button"
                      @click="$emit('view-details')"
                      >View details</AwButton
                    >
                  </AwTableData>
                </slot>
              </slot>
            </AwTableRow>
          </AwTable>
        </slot>
      </div>
    </AwTab>
  </AwTabs>
</template>
<script>
import AwTabs from "../../organisms/AwTabs/AwTabs.vue";
import AwTable from "../../organisms/AwTable/AwTable.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";

export default {
  name: "AwOrderHistory",
  components: {
    AwTabs,
    AwTable,
    AwButton,
  },
  props: {
    tabTitle: {
      type: String,
      default: "My orders",
    },
    orders: {
      type: Array,
      default: () => [
        ["#35765", "4th Nov, 2019", "Visa card", "$12.00", "In process"],
        ["#35766", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
        ["#35768", "4th Nov, 2019", "Mastercard", "$12.00", "Finalised"],
        ["#35769", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
      ],
    },
    tableHeaders: {
      type: Array,
      default: () => [
        "Order ID",
        "Payment date",
        "Payment method",
        "Amount",
        "Status",
      ],
    },
    orderHistoryDescription: {
      type: String,
      default:
        "Check the details and status of your orders in the online store. You can also cancel your order or request a return.",
    },
    noOrdersDescription: {
      type: String,
      default: "You currently have no order history.",
    },
    noOrdersButtonText: {
      type: String,
      default: "Start shopping",
    },
  },
  computed: {
    ordersHistory() {
      return this.orders;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfOrderHistory.scss";
</style>
