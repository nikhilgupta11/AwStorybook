import { shallowMount } from "@vue/test-utils";
import AwProductOption from "./AwProductOption.vue";
describe("AwProductOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwProductOption);
    expect(component.classes("sf-product-option")).toBe(true);
  });
});
