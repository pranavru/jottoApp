/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkPropAttr } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = [
  {
    guessedWords: [
      {
        guessedWord: "train", letterMatchCount: 3,
      },
    ],
  },
];

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("should not throw warning with expected props", () => {
  checkPropAttr(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => { wrapper = setup({ guessedWords: [] }); });
  test("should render without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instruction to guess a word", () => {
    const instruction = findByTestAttr(wrapper, "guessed-word-instruction");
    expect(instruction.text().length).toBeGreaterThan(0);
  });
});

describe("if there are words guessed", () => {

});
