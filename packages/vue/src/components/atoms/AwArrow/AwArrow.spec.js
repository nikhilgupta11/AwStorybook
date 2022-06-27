import { shallowMount } from "@vue/test-utils";
import AwArrow from "./AwArrow.vue";
describe("AwArrow.vue", () => {
  it("renders component with default values", () => {
    const wrapper = shallowMount(AwArrow);
    expect(wrapper.classes("sf-arrow")).toBe(true);
  });
});
