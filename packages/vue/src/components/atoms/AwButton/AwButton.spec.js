import { shallowMount } from "@vue/test-utils";
import AwButton from "./AwButton.vue";
describe("AwButton.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwButton);
    expect(wrapper.classes("sf-button")).toBe(true);
  });
  it("renders component as AwLink", () => {
    const wrapper = shallowMount(AwButton, {
      propsData: {
        link: "/",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });
  it("renders component as disabled button", () => {
    const wrapper = shallowMount(AwButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.classes("is-disabled--button")).toBe(true);
  });
  it("renders component as disabled link", () => {
    const wrapper = shallowMount(AwButton, {
      propsData: {
        link: "/",
        disabled: true,
      },
    });
    expect(wrapper.classes("is-disabled--link")).toBe(true);
  });
  it("renders content via default slot", () => {
    const msg = "HelloWorld";
    const wrapper = shallowMount(AwButton, {
      slots: {
        default: msg,
      },
    });
    expect(wrapper.find(".sf-button").text()).toMatch(msg);
  });
});