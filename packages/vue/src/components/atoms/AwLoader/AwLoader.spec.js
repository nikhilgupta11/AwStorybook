import { shallowMount } from "@vue/test-utils";
import AwLoader from "./AwLoader.vue";
describe("AwLoader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwLoader);
    expect(component.classes("sf-loader")).toBe(true);
  });
});
