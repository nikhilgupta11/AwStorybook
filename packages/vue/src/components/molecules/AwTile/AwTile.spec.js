import { shallowMount } from "@vue/test-utils";
import AwTile from "./AwTile.vue";

describe("AwTile.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTile);
    expect(component.classes("sf-tile")).toBe(true);
  });
});
