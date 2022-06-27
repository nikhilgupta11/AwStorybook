import { shallowMount } from "@vue/test-utils";
import AwAccordionItem from "./AwAccordionItem.vue";
describe("AwAccordionItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwAccordionItem);
    expect(component.classes("sf-accordion-item")).toBe(true);
  });
});
