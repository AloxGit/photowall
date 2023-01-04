import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from ".../index"
import { screen } from "@testing-library/react";
import AddPhoto from "../AddPhoto";


describe("Testing AddPhoto />", () => {
  test("should render AddPhoto", () => {
    render(
      <Provider>
        <Router>
            <AddPhoto/>
        </Router>
      </Provider>
    );
    const billtest = screen.getByTestId("AddPhoto");
    expect(billtest).toBeInTheDocument();
  });
});