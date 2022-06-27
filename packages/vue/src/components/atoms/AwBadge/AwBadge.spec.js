import { shallowMount } from "@vue/test-utils";
import AwBadge from "./AwBadge.vue";
describe("AwBadge.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwBadge);
    expect(wrapper.classes("sf-badge")).toBe(true);
  });
  it("renders component content via default slot", () => {
    const content = "sfbadge content";
    const wrapper = shallowMount(AwBadge, {
      slots: {
        default: content,
      },
    });
    expect(wrapper.find(".sf-badge").text()).toBe(content);
  });
});
