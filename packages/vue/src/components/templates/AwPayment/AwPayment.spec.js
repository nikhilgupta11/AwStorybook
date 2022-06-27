import { shallowMount } from "@vue/test-utils";
const countries = ["United States", "Germany", "Poland"];
import AwPayment from "./AwPayment.vue";
describe("AwPayment.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwPayment, {
      methods: {
        getCountries: () => {
          return countries;
        },
      },
    });
    expect(component.classes("sf-payment")).toBe(true);
  });
});
