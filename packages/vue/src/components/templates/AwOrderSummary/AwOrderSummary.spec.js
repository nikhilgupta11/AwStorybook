import { shallowMount } from "@vue/test-utils";
import AwOrderSummary from "./AwOrderSummary.vue";
describe("AwOrderSummary.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwOrderSummary);
    expect(component.classes("sf-order-summary")).toBe(true);
  });
});
