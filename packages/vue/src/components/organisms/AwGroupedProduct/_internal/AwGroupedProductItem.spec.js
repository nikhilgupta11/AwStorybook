import { shallowMount } from "@vue/test-utils";
import AwGroupedProductItem from "./AwGroupedProductItem.vue";
describe("AwGroupedProductItem.vue", () => {
  it.only("renders a component", () => {
    const component = shallowMount(AwGroupedProductItem);
    expect(component.classes("sf-grouped-product-item")).toBe(true);
  });
});
