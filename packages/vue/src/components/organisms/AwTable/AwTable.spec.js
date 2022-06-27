import { shallowMount } from "@vue/test-utils";
import AwTable from "./AwTable.vue";
describe("AwTable.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTable);
    expect(component.classes("sf-table")).toBe(true);
  });
});
