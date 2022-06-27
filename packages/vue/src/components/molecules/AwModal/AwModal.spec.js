import { shallowMount } from "@vue/test-utils";
import AwModal from "./AwModal.vue";
describe("AwModal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwModal);
    expect(component.classes("sf-modal")).toBe(true);
  });
});
