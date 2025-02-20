import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BackIcon from "../../components/BackIcon";
import { useRouter } from "expo-router";

jest.mock("@expo/vector-icons/Ionicons", () => {
  const React = require("react");
  const { View } = require("react-native");
  return (props) => <View {...props}>{props.children}</View>;
});

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("BackIcon Component", () => {
  it("should call router.back() when pressed", () => {
    const mockBack = jest.fn();
    useRouter.mockReturnValue({ back: mockBack });

    const { getByTestId } = render(<BackIcon />);
    const button = getByTestId("backIcon-touchable");

    fireEvent.press(button);
    expect(mockBack).toHaveBeenCalledTimes(1);
  });
});
