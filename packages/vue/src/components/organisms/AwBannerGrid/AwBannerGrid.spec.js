import { shallowMount } from "@vue/test-utils";
import AwBannerGrid from "./AwBannerGrid.vue";
describe("AwBannerGrid.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwBannerGrid);
    expect(component.classes("sf-banner-grid")).toBe(true);
  });
});
