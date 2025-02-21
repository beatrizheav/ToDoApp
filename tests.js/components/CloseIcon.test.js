import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CloseIcon from "../../components/CloseIcon";

// Mock AntDesign icon
jest.mock("react-native-vector-icons/AntDesign", () => {
  const React = require("react");
  const { View } = require("react-native");
  return (props) => <View {...props}>{props.children}</View>;
});

describe("CloseIcon", () => {
  it("should call onPress when the icon is clicked", () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<CloseIcon onPress={mockOnPress} />);

    const touchable = getByTestId("closeIcon-touchable");

    fireEvent.press(touchable);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
