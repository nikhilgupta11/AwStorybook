import { shallowMount } from "@vue/test-utils";
import AwSelectOption from "./AwSelectOption.vue";

describe("AwSelectOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSelectOption);
    expect(component.classes("sf-select__option")).toBe(true);
  });
});
