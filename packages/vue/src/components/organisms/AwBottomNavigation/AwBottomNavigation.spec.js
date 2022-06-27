import { shallowMount } from "@vue/test-utils";
import AwBottomNavigation from "./AwBottomNavigation.vue";
describe("AwBottomNavigation.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwBottomNavigation);
    expect(component.classes("sf-bottom-navigation")).toBe(true);
  });
});
