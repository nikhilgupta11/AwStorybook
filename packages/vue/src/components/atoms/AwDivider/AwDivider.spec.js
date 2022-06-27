import { shallowMount } from "@vue/test-utils";
import AwDivider from "./AwDivider.vue";
describe("AwDivider.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwDivider);
    expect(wrapper.classes("sf-divider")).toBe(true);
  });
});
