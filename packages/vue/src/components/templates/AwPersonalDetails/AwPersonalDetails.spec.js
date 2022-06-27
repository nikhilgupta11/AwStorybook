import { shallowMount } from "@vue/test-utils";
import AwPersonalDetails from "./AwPersonalDetails.vue";
describe("AwPersonalDetails.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwPersonalDetails);
    expect(component.classes("sf-personal-details")).toBe(true);
  });
});
