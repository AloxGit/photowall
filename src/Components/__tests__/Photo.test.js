import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from ".../index"
import { screen } from "@testing-library/react";
import Photo from "../Photo";


describe("Testing Photo />", () => {
  test("should render Photo", () => {
    render(
      <Provider>
        <Router>
            <Photo/>
        </Router>
      </Provider>
    );
    const billtest = screen.getByTestId("Photo");
    expect(billtest).toBeInTheDocument();
  });
});