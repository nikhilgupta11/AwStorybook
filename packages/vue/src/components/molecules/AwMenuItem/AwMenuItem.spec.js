import { shallowMount } from "@vue/test-utils";
import AwMenuItem from "./AwMenuItem.vue";
describe("AwMenuItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwMenuItem);
    expect(component.classes("sf-menu-item")).toBe(true);
  });
  it("renders a div with correct class", () => {
    const component = shallowMount(AwMenuItem);
    expect(component.html()).toContain("sf-menu-item");
  });
  it("renders correct count prop", () => {
    const countText = "10 item(s)";
    const labelText = "Example title";
    const component = shallowMount(AwMenuItem, {
      propsData: {
        label: labelText,
        count: countText,
      },
    });
    expect(component.find(".sf-menu-item__label").text()).toMatch(labelText);
    expect(component.find(".sf-menu-item__count").text()).toMatch(countText);
  });
  it("renders icon slot", () => {
    const iconHtml = "<img class='test-icon' src='/assets/logo.svg'>";
    const component = shallowMount(AwMenuItem, {
      slots: {
        icon: iconHtml,
      },
    });
    expect(component.find(".test-icon").exists()).toBe(true);
  });
});
