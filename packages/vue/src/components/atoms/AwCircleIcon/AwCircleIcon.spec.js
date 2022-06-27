import { shallowMount } from "@vue/test-utils";
import AwCircleIcon from "./AwCircleIcon.vue";
describe.only("AwCircleIcon.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(AwCircleIcon);
    expect(component.classes("sf-circle-icon")).toBe(true);
  });
});
