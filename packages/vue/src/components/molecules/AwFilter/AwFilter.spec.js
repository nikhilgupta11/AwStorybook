import { shallowMount } from "@vue/test-utils";
import AwFilter from "./AwFilter.vue";
describe("AwFilter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwFilter);
    expect(component.classes("sf-filter")).toBe(true);
  });
});
