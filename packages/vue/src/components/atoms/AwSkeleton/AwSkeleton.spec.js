import { shallowMount } from "@vue/test-utils";
import AwSkeleton from "./AwSkeleton.vue";
describe("AwSkeleton.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwSkeleton);
    expect(wrapper.classes("sf-skeleton")).toBe(true);
  });
  it("renders component with specific type", () => {
    const wrapper = shallowMount(AwSkeleton, {
      propsData: {
        type: "image",
      },
    });
    expect(wrapper.classes("sf-skeleton--image")).toBe(true);
  });
});
