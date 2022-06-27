import { shallowMount } from "@vue/test-utils";
import AwBullets from "./AwBullets.vue";
const propsData = {
  total: 3,
  current: 1,
};
describe("AwBullets.vue", () => {
  it("renders a component with defaults", () => {
    const wrapper = shallowMount(AwBullets);
    expect(wrapper.classes("sf-bullets")).toBe(true);
  });
  it("renders a component with total number of bullets", () => {
    const wrapper = shallowMount(AwBullets, { propsData });
    expect(wrapper.classes("sf-bullets")).toBe(true);
  });
});
