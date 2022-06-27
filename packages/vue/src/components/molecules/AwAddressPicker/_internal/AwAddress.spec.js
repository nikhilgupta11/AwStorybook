import { shallowMount } from "@vue/test-utils";
import AwAddress from "./AwAddress.vue";
// import AwAddressPicker from "../AwAddressPicker.vue";

describe("AwAddress.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwAddress, {
      provide: {
        getSelectedValue: () => "example",
        setSelectedValue: () => "example",
      },
    });
    expect(component.classes("sf-address")).toBe(true);
  });
});
