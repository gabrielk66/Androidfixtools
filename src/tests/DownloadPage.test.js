import { render, cleanup } from "@testing-library/react";
import DownloadApps from "../components/Pages/download_apps_page/download_apps";

jest.mock( "../components/Pages/download_apps_page/download_apps");

beforeEach(cleanup);

test("Testing if Shortcuts page is created", () => {
  var component = render(<DownloadApps />)
  expect(component).toBeTruthy();
});