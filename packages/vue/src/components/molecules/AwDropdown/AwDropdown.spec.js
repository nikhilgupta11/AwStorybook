import { shallowMount } from "@vue/test-utils";
import AwDropdown from "./AwDropdown.vue";
describe("AwDropdown.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwDropdown, {
      propsData: {
        isOpen: true,
      },
    });
    expect(component.classes("sf-dropdown")).toBe(true);
  });
});
