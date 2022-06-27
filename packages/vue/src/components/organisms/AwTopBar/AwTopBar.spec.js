import { shallowMount } from "@vue/test-utils";
import AwTopBar from "./AwTopBar.vue";
describe("AwTopBar", () => {
  it("renders a container element", () => {
    const component = shallowMount(AwTopBar, {});
    expect(component.classes("sf-top-bar")).toBe(true);
  });
  // Left slot check
  it("renders left slot content when passed", () => {
    const leftContent = "LEFT__CONTENT";
    const component = shallowMount(AwTopBar, {
      slots: {
        left: leftContent,
      },
    });
    expect(component.find(".sf-top-bar__left").text()).toMatch(leftContent);
  });
  // Right slot check
  it("renders right slot content when passed", () => {
    const rightContent = "RIGHT__CONTENT";
    const component = shallowMount(AwTopBar, {
      slots: {
        right: rightContent,
      },
    });
    expect(component.find(".sf-top-bar__right").text()).toMatch(rightContent);
  });
});
