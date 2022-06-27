import { shallowMount } from "@vue/test-utils";
import AwChevron from "./AwChevron.vue";
describe.only("AwChevron.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwChevron);
    expect(wrapper.classes("sf-chevron")).toBe(true);
  });
  it("renders slot with content passed via slot", () => {
    const wrapper = shallowMount(AwChevron, {
      slots: {
        default: "<div class='sf-chevron__chevron'>Some content</div>",
      },
    });
    expect(wrapper.find(".sf-chevron__chevron").exists()).toBe(true);
  });
});
