import { render, cleanup } from "@testing-library/react";
import Shortcuts from "../components/Pages/shortcuts_page/shortcuts";

jest.mock("../components/Pages/shortcuts_page/shortcuts");

beforeEach(cleanup);

test("Testing if Shortcuts page is created", () => {
  var component = render(<Shortcuts />);
  expect(component).toBeTruthy();
});