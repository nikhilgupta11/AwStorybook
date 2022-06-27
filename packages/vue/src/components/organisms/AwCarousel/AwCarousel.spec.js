import { shallowMount } from "@vue/test-utils";
import AwCarousel from "./AwCarousel.vue";
describe("AwCarousel.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwCarousel);
    expect(component.classes("sf-carousel")).toBe(true);
  });
});
