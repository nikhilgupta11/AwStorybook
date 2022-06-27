import { shallowMount } from "@vue/test-utils";
import AwInput from "./AwInput.vue";
describe("AwInput.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwInput);
    expect(wrapper.classes("sf-input")).toBe(true);
  });
  it("renders label text when passed", () => {
    const label = "HelloWorld";
    const wrapper = shallowMount(AwInput, {
      propsData: {
        label,
      },
    });
    expect(wrapper.find(".sf-input__label").text()).toBe(label);
  });
  it("emits input when triggered", () => {
    const wrapper = shallowMount(AwInput, {
      propsData: {
        type: "password",
        hasShowPassword: true,
      },
    });
    const input = wrapper.find("input");
    input.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });
  it("switch password visibility when button clicked", () => {
    const wrapper = shallowMount(AwInput, {
      propsData: {
        type: "password",
        hasShowPassword: true,
      },
    });
    const passwordButton = wrapper.find(".sf-input__password-button");
    passwordButton.trigger("click");
    expect(wrapper.find(".sf-input__password-icon").classes("hidden")).toBe(
      true
    );
  });
});
