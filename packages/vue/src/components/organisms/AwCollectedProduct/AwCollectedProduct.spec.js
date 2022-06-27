import { shallowMount } from "@vue/test-utils";
import AwCollectedProduct from "./AwCollectedProduct.vue";
describe("AwCollectedProduct.vue", () => {
  it("renders a component", () => {
    const title = "Product";
    const component = shallowMount(AwCollectedProduct, {
      propsData: {
        title,
      },
    });
    expect(component.classes("sf-collected-product")).toBe(true);
  });
});
