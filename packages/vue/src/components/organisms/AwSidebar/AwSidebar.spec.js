import { shallowMount } from "@vue/test-utils";
import AwSidebar from "./AwSidebar.vue";
describe("AwSidebar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwSidebar, {
      propsData: {
        visible: true,
      },
    });
    expect(component.classes("sf-sidebar")).toBe(true);
  });
});
