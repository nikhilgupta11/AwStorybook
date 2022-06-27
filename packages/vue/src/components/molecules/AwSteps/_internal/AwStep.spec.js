import { shallowMount } from "@vue/test-utils";
import AwStep from "./AwStep.vue";
import AwSteps from "../AwSteps.vue";
describe("AwStep.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwStep, {
      provide: {
        stepsData: {
          index: 0,
          name: "example",
          updateSteps: () => [],
        },
      },
    });
    expect(component.classes("sf-step")).toBe(true);
  });
});
