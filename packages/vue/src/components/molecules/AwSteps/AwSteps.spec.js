import { shallowMount } from "@vue/test-utils";
import AwSteps from "./AwSteps.vue";
describe("AwSteps.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSteps, {
      propsData: {
        steps: ["one", "two"],
      },
    });
    expect(component.classes("sf-steps")).toBe(true);
  });
});
