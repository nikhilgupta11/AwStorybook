import { shallowMount } from "@vue/test-utils";
import AwTab from "./AwTab.vue";
describe("AwTab.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwTab, {
      provide: {
        tabConfig: {
          tabMaxContentHeight: "",
          tabShowText: "",
          tabHideText: "",
        },
      },
    });
    expect(component.exists("sf-tabs__tab")).toBe(true);
  });
});
