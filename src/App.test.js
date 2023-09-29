import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Smoke testing", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("matches snapshot", function () {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Navbar Navigation", () => {
  it("navigates to Sign Up page when clicking on the Sign Up linkq", () => {
    render(
        <App />
    );
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
