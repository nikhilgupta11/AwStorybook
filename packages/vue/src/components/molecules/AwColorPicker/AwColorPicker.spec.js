import { shallowMount } from "@vue/test-utils";
import AwColorPicker from "./AwColorPicker.vue";

describe("AwColorPicker.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwColorPicker);
    expect(component.classes("sf-color-picker")).toBe(true);
  });
});
