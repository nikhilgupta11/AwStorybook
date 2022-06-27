import { shallowMount } from "@vue/test-utils";
import AwConfirmOrder from "./AwConfirmOrder.vue";
describe("AwConfirmOrder.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwConfirmOrder);
    expect(component.classes("sf-confirm-order")).toBe(true);
  });
});
