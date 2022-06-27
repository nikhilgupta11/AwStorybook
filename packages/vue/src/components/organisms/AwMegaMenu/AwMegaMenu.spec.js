import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import AwMegaMenu from "./AwMegaMenu.vue";
describe("AwMegaMenu.vue", () => {
  it("renders a Mega Menu", () => {
    const component = shallowMount(AwMegaMenu, {
      propsData: { visible: true },
    });
    expect(component.find(".sf-mega-menu").exists()).toBe(true);
  });
});
