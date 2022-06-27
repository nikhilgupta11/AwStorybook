import { shallowMount } from "@vue/test-utils";
import AwList from "./AwList.vue";
describe("AwList.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwList);
    expect(component.classes("sf-list")).toBe(true);
  });
  // todo: test defautl slot, test if SfListItem is rendered
});
