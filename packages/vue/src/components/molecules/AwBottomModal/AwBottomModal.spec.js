import { shallowMount } from "@vue/test-utils";
import AwBottomModal from "./AwBottomModal.vue";

describe("AwBottomModal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwBottomModal);
    expect(component.classes("sf-bottom-modal")).toBe(true);
  });
});
