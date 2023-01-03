import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from ".../index"
import { screen } from "@testing-library/react";
import Title from "../Title";


describe("Testing Title />", () => {
  test("should render Title", () => {
    render(
      <Provider>
        <Router>
            <Title />
        </Router>
      </Provider>
    );
    const billtest = screen.getByTestId("Title");
    expect(billtest).toBeInTheDocument();
  });
});