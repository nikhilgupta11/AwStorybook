import { shallowMount } from "@vue/test-utils";
import AwColor from "./AwColor.vue";

describe("AwColor", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwColor);
    expect(wrapper.classes("sf-color")).toBe(true);
  });
  it("renders component with props", () => {
    const wrapper = shallowMount(AwColor, {
      propsData: {
        color: "green",
        hasBadge: false,
        selected: false,
      },
    });
    expect(wrapper.classes("sf-color")).toBe(true);
  });
  it("renders component with badge", () => {
    const wrapper = shallowMount(AwColor, {
      propsData: {
        hasBadge: true,
        selected: true,
      },
    });
    expect(wrapper.find(".sf-color__badge").exists()).toBe(true);
  });
  it("renders content passed via badge slot", () => {
    const component = shallowMount(AwColor, {
      slots: {
        badge: "<div class='sf-badge'>Some content</div>",
      },
    });
    expect(component.find(".sf-badge").exists()).toBe(true);
  });
});
