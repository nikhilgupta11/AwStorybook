import { shallowMount } from "@vue/test-utils";
import AwGroupedProduct from "@/components/organisms/AwGroupedProduct/AwGroupedProduct.vue";
describe("AwGroupedProduct.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwGroupedProduct);
    expect(component.classes("sf-grouped-product")).toBe(true);
  });
});
