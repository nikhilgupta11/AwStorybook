import { shallowMount } from "@vue/test-utils";
import AwShippingDetails from "./AwShippingDetails.vue";
describe("AwShippingDetails.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwShippingDetails);
    expect(component.classes("sf-shipping-details")).toBe(true);
  });
});
