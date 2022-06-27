import { shallowMount } from "@vue/test-utils";
import AwCarouselItem from "./AwCarouselItem.vue";
describe("AwCarouselItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwCarouselItem);
    expect(component.classes("sf-carousel-item")).toBe(true);
  });
});
