import { shallowMount } from "@vue/test-utils";
import AwReview from "./AwReview.vue";
describe("AwReview.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwReview);
    expect(component.classes("sf-review")).toBe(true);
  });
});
