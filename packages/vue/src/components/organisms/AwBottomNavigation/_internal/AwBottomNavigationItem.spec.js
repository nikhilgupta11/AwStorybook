import { shallowMount } from "@vue/test-utils";
import AwBottomNavigationItem from "./AwBottomNavigationItem.vue";
describe("AwBottomNavigationItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwBottomNavigationItem);
    expect(component.classes("sf-bottom-navigation-item")).toBe(true);
  });
});
