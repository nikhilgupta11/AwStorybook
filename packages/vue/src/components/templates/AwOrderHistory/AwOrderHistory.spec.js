import { shallowMount } from "@vue/test-utils";
import AwOrderHistory from "./AwOrderHistory.vue";
describe("AwOrderHistory.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwOrderHistory);
    expect(component.classes("sf-order-history")).toBe(true);
  });
});
