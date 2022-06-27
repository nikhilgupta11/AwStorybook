import { shallowMount } from "@vue/test-utils";
import AwMyProfile from "./AwMyProfile.vue";
describe("AwMyProfile.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwMyProfile);
    expect(component.classes("sf-my-profile")).toBe(true);
  });
});
