import { shallowMount } from "@vue/test-utils";
import AwComponentSelectOption from "./AwComponentSelectOption.vue";
describe("AwComponentSelectOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwComponentSelectOption);
    expect(component.classes("sf-component-select-option")).toBe(true);
  });
});
