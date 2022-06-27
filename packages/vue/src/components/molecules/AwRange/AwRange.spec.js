import { shallowMount } from "@vue/test-utils";
import AwRange from "./AwRange.vue";

describe("AwRange.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwRange);
    expect(component.classes("sf-range")).toBe(true);
  });
});
