import { shallowMount } from "@vue/test-utils";
import AwTableHeading from "./AwTableHeading.vue";
describe("AwTableHeading.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTableHeading, {
      provide: {
        table: () => {},
      },
    });
    expect(component.exists()).toBe(true);
  });
});
