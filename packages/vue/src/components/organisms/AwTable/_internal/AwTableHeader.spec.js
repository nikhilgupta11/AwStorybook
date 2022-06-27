import { shallowMount } from "@vue/test-utils";
import AwTableHeader from "./AwTableHeader.vue";
describe("AwTableHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTableHeader);
    expect(component.classes("sf-table__header")).toBe(true);
  });
});
