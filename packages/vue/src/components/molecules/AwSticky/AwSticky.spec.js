import { shallowMount } from "@vue/test-utils";
import AwSticky from "./AwSticky.vue";
describe("AwSticky.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSticky);
    expect(component.classes("sf-sticky")).toBe(true);
  });
});
