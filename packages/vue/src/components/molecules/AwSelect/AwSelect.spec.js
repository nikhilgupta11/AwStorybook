import { shallowMount } from "@vue/test-utils";
import AwSelect from "./AwSelect.vue";

describe("AwSelect.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSelect);
    expect(component.classes("sf-select")).toBe(true);
  });
});
