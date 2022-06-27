import { shallowMount } from "@vue/test-utils";
import AwOverlay from "./AwOverlay.vue";
describe("AwOverlay.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwOverlay, {
      propsData: {
        visible: true,
      },
    });
    expect(component.find(".sf-overlay").exists()).toBe(true);
  });
});
