import { shallowMount } from "@vue/test-utils";
import AwCard from "./AwCard.vue";

describe("AwCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwCard, {
      propsData: {
        title: "Baby Care",
        titleLevel: 3,
        description:
          "Read how to take care of your baby, see our products available, clothes and suggestions how stay healthy.",
        buttonText: "Learn more",
        imageWidth: 288,
        imageHeight: 189,
      },
    });
    expect(component.classes("sf-card")).toBe(true);
  });
});
