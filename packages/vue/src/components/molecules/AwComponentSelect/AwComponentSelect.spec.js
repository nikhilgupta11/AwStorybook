import { shallowMount } from "@vue/test-utils";
import AwComponentSelect from "./AwComponentSelect.vue";
describe("AwComponentSelect.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwComponentSelect);
    expect(component.classes("sf-component-select")).toBe(true);
  });
});
