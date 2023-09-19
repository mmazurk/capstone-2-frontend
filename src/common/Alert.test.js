
import { render } from "@testing-library/react";
import Alert from "./Alert";

it("renders without crashing", function() {
  render(<Alert />);
});

it("matches snapshot for danger", function() {
  let messages = ["Total failure, OMG", "Wow this was bad"];
  const { asFragment } = render(<Alert type="danger" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", function() {
  let messages = ["Perfection every time"];
  const { asFragment } = render(<Alert type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});