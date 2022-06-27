import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import AwFooter from "@/components/organisms/AwFooter/AwFooter.vue";
describe("AwFooter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwFooter);
    expect(component.classes("sf-footer")).toBe(true);
  });
});
