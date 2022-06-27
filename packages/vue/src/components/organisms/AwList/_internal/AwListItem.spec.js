import { shallowMount } from "@vue/test-utils";
import AwListItem from "./AwListItem.vue";
describe("AwListItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwListItem);
    expect(component.classes("sf-list__item")).toBe(true);
  });
});
