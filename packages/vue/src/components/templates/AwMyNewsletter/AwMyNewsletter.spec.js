import { shallowMount } from "@vue/test-utils";
import AwMyNewsletter from "./AwMyNewsletter.vue";
describe("AwMyNewsletter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwMyNewsletter);
    expect(component.classes("sf-my-newsletter")).toBe(true);
  });
});
