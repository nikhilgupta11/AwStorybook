import { shallowMount } from "@vue/test-utils";
import AwBreadcrumbs from "./AwBreadcrumbs.vue";
const propsData = {
  breadcrumbs: [{ text: "HelloWorld" }],
};
describe("AwBreadcrumbs.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwBreadcrumbs);
    expect(wrapper.classes("sf-breadcrumbs")).toBe(true);
  });
  it("renders component with breadcrumbs prop", () => {
    const wrapper = shallowMount(AwBreadcrumbs, { propsData });
    expect(wrapper.classes("sf-breadcrumbs")).toBe(true);
  });
  it("renders breadcrumbs text", () => {
    const msg = "HelloWorld";
    const wrapper = shallowMount(AwBreadcrumbs, { propsData });
    expect(wrapper.find(".current").text()).toMatch(msg);
  });
});
