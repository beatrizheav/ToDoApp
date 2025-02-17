import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NavBar from "../../components/NavBar";
import { useRouter } from "expo-router";

jest.mock("@expo/vector-icons/Ionicons", () => {
  const React = require("react");
  const { View } = require("react-native");
  return (props) => <View {...props}>{props.children}</View>;
});

jest.mock("@expo/vector-icons/Feather", () => {
  const React = require("react");
  const { View } = require("react-native");
  return (props) => <View {...props}>{props.children}</View>;
});

jest.mock("@expo/vector-icons/FontAwesome", () => {
  const React = require("react");
  const { View } = require("react-native");
  return (props) => <View {...props}>{props.children}</View>;
});

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
  })),
}));

describe("Nav Bar Component", () => {
  it("should push router ./categories when categories icon pressed", () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    const { getByTestId } = render(<NavBar />);

    const button = getByTestId("categoriesIcon-touchable");

    fireEvent.press(button);
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith("./categories");
  });

  it("should call setAction and toggleSheet when the custom button is pressed", () => {
    const mockSetAction = jest.fn();
    const mockToggleSheet = jest.fn();

    const { getByTestId } = render(
      <NavBar toggleSheet={mockToggleSheet} setAction={mockSetAction} />
    );

    const customButton = getByTestId("custom-button");

    fireEvent.press(customButton);

    expect(mockSetAction).toHaveBeenCalledWith("add");
    expect(mockToggleSheet).toHaveBeenCalled();
  });

  it("should push router ./categories when categories icon pressed", () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    const { getByTestId } = render(<NavBar />);

    const button = getByTestId("profileIcon-touchable");

    fireEvent.press(button);
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith("./profile");
  });
});
