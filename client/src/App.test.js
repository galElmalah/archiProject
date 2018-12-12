import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
jest.mock("axios");
axios.post = jest.fn().mockReturnValue({ then: () => {} });
// Now we can track calls to playSoundFile
configure({ adapter: new Adapter() });

describe("renders as expected", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("button")).toHaveLength(6);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});

const assertCalledAxiosWithRightParams = i => {
  const baseUrl = port => `http://localhost:${port}`;
  if (i < 5) {
    expect(axios.post).toHaveBeenCalledWith(baseUrl(3000 + i), {
      text: ""
    });
  } else {
    expect(axios.post).toHaveBeenCalledWith(baseUrl(3000 + i), {
      text: "",
      subString: ""
    });
  }
};
describe("clicking button", () => {
  it("should trigger http request", () => {
    const wrapper = mount(<App />);
    const buttons = wrapper.find("button");
    buttons.forEach((button, i) => {
      button.simulate("click");
      assertCalledAxiosWithRightParams(i);
    });
  });

  it("should change the text in the state", () => {
    const wrapper = mount(<App />);
    const input = wrapper.find("input").at(0);
    input.simulate("change", { target: { value: "yoel" } });
    expect(input.getDOMNode().value).toBe("yoel");
    expect(wrapper.state().text).toBe("yoel");
    const dotButton = wrapper.find("button").at(0);
    dotButton.simulate("click");
    expect(axios.post).toHaveBeenCalledWith("http://localhost:3000", {
      text: "yoel"
    });
  });
});
