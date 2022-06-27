import { shallowMount } from "@vue/test-utils";
import AwShipping from "./AwShipping.vue";
describe("AwShipping.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwShipping);
    expect(component.classes("sf-shipping")).toBe(true);
  });
});
