import { shallowMount } from "@vue/test-utils";
import AwSection from "./AwSection.vue";
describe("AwSection.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSection);
    expect(component.classes("sf-section")).toBe(true);
  });
});
