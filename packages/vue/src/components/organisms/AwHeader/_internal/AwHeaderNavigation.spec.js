import { shallowMount } from "@vue/test-utils";
import AwHeaderNavigation from "./AwHeaderNavigation.vue";
describe("AwHeaderNavigation.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwHeaderNavigation);
    expect(component.classes("sf-header-navigation")).toBe(true);
  });
});
