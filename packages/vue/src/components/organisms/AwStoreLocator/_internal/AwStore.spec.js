import { shallowMount } from "@vue/test-utils";
import AwStore from "./AwStore.vue";
describe("AwStore.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwStore, {
      provide: {
        registerStore: () => {},
        removeStore: () => {},
        centerOn: () => {},
        getGeoDistance: () => {},
        locatorData: () => {},
      },
    });
    expect(component.classes("sf-store")).toBe(true);
  });
});
