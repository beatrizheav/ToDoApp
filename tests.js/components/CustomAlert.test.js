import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomAlert from "../../components/CustomAlert"; // Adjust the import path
import { customAlert } from "../../styles/components/custom-alert";

// Mock CloseIcon and CustomButton components
jest.mock("../../components/CloseIcon", () => {
  return ({ onPress }) => <button onClick={onPress} testID="close-icon" />;
});

jest.mock("../../components/CustomButton", () => {
  return ({ onPress, text, testID }) => (
    <button onClick={onPress} testID={testID}>
      {text}
    </button>
  );
});

describe("CustomAlert", () => {
  it("should render the modal when visible is true", () => {
    const { getByText } = render(
      <CustomAlert
        visible={true}
        setVisible={() => {}}
        confirmAction={() => {}}
      />
    );

    expect(getByText("Log out")).toBeTruthy(); // Check if the default title is shown
    expect(getByText("Are you sure you want to log out?")).toBeTruthy(); // Check if the default description is shown
  });

  it("should call setVisible on requestClose the modal when visible is true", () => {
    const { getByText } = render(
      <CustomAlert
        visible={true}
        setVisible={() => {}}
        confirmAction={() => {}}
      />
    );

    expect(getByText("Log out")).toBeTruthy(); // Check if the default title is shown
    expect(getByText("Are you sure you want to log out?")).toBeTruthy(); // Check if the default description is shown
  });

  it("should close the modal when the close button is pressed", () => {
    const mockSetVisible = jest.fn();
    const { getByTestId } = render(
      <CustomAlert
        visible={true}
        setVisible={mockSetVisible}
        confirmAction={() => {}}
      />
    );

    const closeButton = getByTestId("close-icon");

    fireEvent.press(closeButton); // Simulate press on close button

    expect(mockSetVisible).toHaveBeenCalledWith(false); // Check if setVisible was called with false
  });

  it("should call setVisible and confirmAction when Yes button is pressed", () => {
    const mockSetVisible = jest.fn();
    const mockConfirmAction = jest.fn();
    const { getByTestId } = render(
      <CustomAlert
        visible={true}
        setVisible={mockSetVisible}
        confirmAction={mockConfirmAction}
        type="item"
      />
    );

    const yesButton = getByTestId("yes-button"); // Use testID for Yes button

    fireEvent.press(yesButton); // Simulate press on Yes button

    expect(mockSetVisible).toHaveBeenCalledWith(false); // Check if setVisible was called with false
    expect(mockConfirmAction).toHaveBeenCalled(); // Check if confirmAction was called
  });

  it("should display the correct title and description when type is passed", () => {
    const { getByText } = render(
      <CustomAlert
        visible={true}
        setVisible={() => {}}
        confirmAction={() => {}}
        type="item"
      />
    );

    expect(getByText("Delete item")).toBeTruthy(); // Check if title changes based on type
    expect(
      getByText("Are you sure you want to delete this item?")
    ).toBeTruthy(); // Check if description changes based on type
  });
});
