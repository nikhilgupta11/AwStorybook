import { shallowMount } from "@vue/test-utils";
import AwTableData from "./AwTableData.vue";
describe("AwTableData.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTableData);
    expect(component.classes("sf-table__data")).toBe(true);
  });
});
