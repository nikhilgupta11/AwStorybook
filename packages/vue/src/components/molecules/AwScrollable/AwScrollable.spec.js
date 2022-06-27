import { shallowMount } from "@vue/test-utils";
import AwScrollable from "./AwScrollable.vue";
describe("AwScrollable.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwScrollable);
    expect(component.classes("sf-scrollable")).toBe(true);
  });
});
