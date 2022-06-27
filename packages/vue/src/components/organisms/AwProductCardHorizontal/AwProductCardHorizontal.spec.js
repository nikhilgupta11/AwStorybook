import { shallowMount } from "@vue/test-utils";
import AwProductCardHorizontal from "./AwProductCardHorizontal.vue";
describe("AwProductCardHorizontal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwProductCardHorizontal);
    expect(component.classes("sf-product-card-horizontal")).toBe(true);
  });
});
