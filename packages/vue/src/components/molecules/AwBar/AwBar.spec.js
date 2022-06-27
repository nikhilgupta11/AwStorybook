import { shallowMount } from "@vue/test-utils";
import AwBar from "./AwBar.vue";
describe("AwBar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwBar);
    expect(component.classes("sf-bar")).toBe(true);
  });
});
