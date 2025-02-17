import React from "react";
import { render } from "@testing-library/react-native";
import CustomTitle from "../../components/CustomTitle";
import { fontsTheme } from "../../styles/fontsTheme";

describe("CustomTitle", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<CustomTitle text="Test Title" type="big" />);

    expect(getByText("Test Title")).toBeTruthy();
  });

  it("applies the correct style for 'big' type", () => {
    const { getByText } = render(<CustomTitle text="Test Title" type="big" />);

    const textElement = getByText("Test Title");

    expect(textElement).toHaveStyle(fontsTheme.title);
    expect(textElement).toHaveStyle(fontsTheme.titleBig);
  });

  it("applies the correct style for 'small' type", () => {
    const { getByText } = render(
      <CustomTitle text="Test Title" type="small" />
    );

    const textElement = getByText("Test Title");

    expect(textElement).toHaveStyle(fontsTheme.title);
    expect(textElement).toHaveStyle(fontsTheme.titleSmall);
  });
});
