import { shallowMount } from "@vue/test-utils";
import AwPagination from "./AwPagination.vue";

describe("AwPagination.vue", () => {
  it("renders a pagination", () => {
    const component = shallowMount(AwPagination);
    expect(component.classes("sf-pagination")).toBe(true);
  });
});
