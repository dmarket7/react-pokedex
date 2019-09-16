import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Pokecard
  from "./Pokecard";

it("renders using shallow", function() {
  // this test passes
  shallow(<Pokecard />);
});

it("renders using mount", function() {
  // this test fails!
  mount(<Pokecard />);
});

it("matches snapshot for adopted dogs", function() {
  let wrapper = shallow(<Pokecard name="Eevee" id={4} type="fire" experience={62} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

