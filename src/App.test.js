import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

it("Renders Home Component without crashing", () => {
  shallow(<App />);
});
