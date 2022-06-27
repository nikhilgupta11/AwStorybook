import { shallowMount } from "@vue/test-utils";
import AwOrderReview from "./AwOrderReview.vue";
describe("AwOrderReview.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwOrderReview);
    expect(component.classes("sf-order-review")).toBe(true);
  });
});
