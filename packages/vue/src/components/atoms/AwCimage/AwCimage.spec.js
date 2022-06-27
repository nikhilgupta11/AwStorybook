import { shallowMount } from "@vue/test-utils";
import { getConfig } from "cloudinary-build-url";
import AwCimage from "./AwCimage.vue";

describe("AwCimage.vue", () => {
  it("renders a component with publicId and cloud", () => {
    const wrapper = shallowMount(AwCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
      },
    });
    expect(wrapper.classes("sf-cimage")).toBe(true);
  });
  it("renders a component with placeholder", () => {
    const wrapper = shallowMount(AwCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
        placeholder: "blur",
      },
    });
    expect(wrapper.classes("sf-cimage")).toBe(true);
  });
});
