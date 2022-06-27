import { shallowMount } from "@vue/test-utils";
import AwAddToCart from "./AwAddToCart.vue";
describe("AwAddToCart.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwAddToCart);
    expect(component.classes("sf-add-to-cart")).toBe(true);
  });
});
