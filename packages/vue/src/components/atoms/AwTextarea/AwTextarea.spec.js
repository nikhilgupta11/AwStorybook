import { shallowMount } from "@vue/test-utils";
import AwTextarea from "./AwTextarea.vue";
describe("AwTextarea.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwTextarea);
    expect(wrapper.classes("sf-textarea")).toBe(true);
  });
  it("renders component with value", () => {
    const wrapper = shallowMount(AwTextarea, {
      context: {
        props: {
          value: "text",
        },
        listeners: {
          input: () => {
            expect(wrapper.vm.$data.input).toBeTruthy();
            done();
          },
        },
      },
    });
    wrapper.find("textarea").trigger("input");
  });
});
