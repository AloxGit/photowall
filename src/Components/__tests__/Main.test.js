import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from ".../index"
import { screen } from "@testing-library/react";
import Main from "../Main";


describe("Testing Main />", () => {
  test("should render Main", () => {
    render(
      <Provider>
        <Router>
            <Main/>
        </Router>
      </Provider>
    );
    const billtest = screen.getByTestId("Main");
    expect(billtest).toBeInTheDocument();
  });
});