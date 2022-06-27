import { shallowMount } from "@vue/test-utils";
import AwContentCategory from "./AwContentCategory.vue";
import AwContentPages from "../AwContentPages.vue";
describe("AwContentCategory.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwContentCategory, {
      parentComponent: AwContentPages,
    });
    expect(component.classes("sf-content-category")).toBe(true);
  });
});
