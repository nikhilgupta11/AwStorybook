import { shallowMount } from "@vue/test-utils";
import AwCategoryCard from "./AwCategoryCard.vue";

describe("AwCategoryCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwCategoryCard);
    expect(component.classes("sf-category-card")).toBe(true);
  });
});
