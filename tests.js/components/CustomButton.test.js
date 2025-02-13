import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { customButton } from "../../styles/components/custom-button";
import { fontsTheme } from "../../styles/fontsTheme";
import { Feather } from "@expo/vector-icons";

describe("CustomButton", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<CustomButton text="Test Title" type="big" />);

    // Check if the text is rendered
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("applies the correct style for text", () => {
    const { getByText } = render(<CustomButton text="Test Title" type="big" />);

    const textElement = getByText("Test Title");

    // Check that the correct styles are applied when 'big' type is passed
    expect(textElement).toHaveStyle(fontsTheme.buttons);
  });

  it("applies the correct style for 'big' type", () => {
    const { getByTestId } = render(
      <CustomButton text="Big Button" type="big" />
    );

    const button = getByTestId("custom-button");
    // Flatten the style array
    const combinedStyle = StyleSheet.flatten(button.props.style);

    expect(combinedStyle).toMatchObject({
      ...customButton.container,
      ...customButton.big,
    });
  });

  it("applies the correct style for 'small' type", () => {
    const { getByTestId } = render(
      <CustomButton text="Big Button" type="small" />
    );

    const button = getByTestId("custom-button");

    // Flatten the style array
    const combinedStyle = StyleSheet.flatten(button.props.style);

    expect(combinedStyle).toMatchObject({
      ...customButton.container,
      ...customButton.small,
    });
  });

  it("applies the correct style when no type is provided", () => {
    const { getByTestId } = render(<CustomButton text="Big Button" />);

    const button = getByTestId("custom-button");
    // Flatten the style array
    const combinedStyle = StyleSheet.flatten(button.props.style);

    expect(combinedStyle).toMatchObject({
      ...customButton.container,
      ...customButton.add,
    });
  });

  it("calls the onPress function when the button is pressed", () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <CustomButton text="Click Me" type="big" onPress={onPressMock} />
    );

    const button = getByTestId("custom-button");

    fireEvent.press(button); // Simulate a press event on the button

    // Check if the mock function was called when the button is pressed
    expect(onPressMock).toHaveBeenCalledTimes(1); // The function should have been called exactly once
  });

  it("renderiza el texto cuando type no es 'add'", () => {
    const textValue = "Test Button";
    const { getByText, queryByTestId } = render(
      <CustomButton type="other" text={textValue} />
    );
    expect(getByText(textValue)).toBeTruthy();
    expect(queryByTestId("feather-icon")).toBeNull();
  });
});
