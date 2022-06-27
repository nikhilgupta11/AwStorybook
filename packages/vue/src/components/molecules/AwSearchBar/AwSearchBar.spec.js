import { shallowMount } from "@vue/test-utils";
import AwSearchBar from "./AwSearchBar.vue";

describe.only("AwSearchBar.vue", () => {
  it("renders a search bar", () => {
    const component = shallowMount(AwSearchBar);
    expect(component.classes("sf-search-bar")).toBe(true);
  });
  it("renders placeholder props when passed", () => {
    const placeholder = "Search for...";
    const component = shallowMount(AwSearchBar, {
      propsData: {
        placeholder: placeholder,
      },
    });
    expect(component.find(".sf-search-bar").attributes("placeholder")).toEqual(
      placeholder
    );
  });
});
