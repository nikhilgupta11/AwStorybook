import "../matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import AwFooterColumn from "./AwFooterColumn.vue";
import AwFooter from "../AwFooter.vue";
describe("AwFooterColumn.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwFooterColumn, {
      parentComponent: AwFooter,
    });
    expect(component.classes("sf-footer-column")).toBe(true);
  });
});
