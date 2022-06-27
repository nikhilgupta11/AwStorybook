import { shallowMount } from "@vue/test-utils";
import AwProperty from "./AwProperty.vue";
describe("AwProperty.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwProperty);
    expect(component.classes("sf-property")).toBe(true);
  });
  it("renders a div with correct class", () => {
    const component = shallowMount(AwProperty);
    expect(component.html()).toContain("sf-property");
  });
  it("renders correct row", () => {
    const nameText = "Category";
    const valueText = "Pants";
    const component = shallowMount(AwProperty, {
      propsData: {
        name: nameText,
        value: valueText,
      },
    });
    expect(component.find(".sf-property__name").text()).toMatch(nameText);
    expect(component.find(".sf-property__value").text()).toMatch(valueText);
  });
});
