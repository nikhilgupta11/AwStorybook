import { shallowMount } from "@vue/test-utils";
import AwHeaderNavigationItem from "./AwHeaderNavigationItem.vue";
describe("AwHeaderNavigationItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwHeaderNavigationItem);
    expect(component.classes("sf-header-navigation-item")).toBe(true);
  });
});
