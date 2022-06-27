import { shallowMount } from "@vue/test-utils";
import AwGallery from "./AwGallery.vue";
describe("AwGallery.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwGallery);
    expect(component.classes("sf-gallery")).toBe(true);
  });
});
