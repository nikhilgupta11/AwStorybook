import { shallowMount } from "@vue/test-utils";
import AwCheckbox from "./AwCheckbox.vue";
describe("AwCheckbox.vue", () => {
  it("renders a checkbox", () => {
    const component = shallowMount(AwCheckbox);
    expect(component.find(".sf-checkbox__input").exists()).toBe(true);
  });
  it("renders label text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(AwCheckbox, {
      propsData: {
        label: msg,
      },
    });
    expect(component.find(".sf-checkbox__label").text()).toMatch(msg);
  });
});
