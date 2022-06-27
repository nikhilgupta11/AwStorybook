import { shallowMount } from "@vue/test-utils";
import AwTableRow from "./AwTableRow.vue";
describe("AwTableRow.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTableRow, {
      provide: {
        table: () => {},
      },
    });
    expect(component.exists()).toBe(true);
  });
});
