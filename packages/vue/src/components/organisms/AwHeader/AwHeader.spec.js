import { shallowMount } from "@vue/test-utils";
import AwHeader from "./AwHeader.vue";
describe("AwHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwHeader);
    expect(component.classes("sf-header")).toBe(true);
  });
});
