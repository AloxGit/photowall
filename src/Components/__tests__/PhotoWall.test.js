import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from ".../index"
import { screen } from "@testing-library/react";
import PhotoWall from "../PhotoWall";
import posts from "../../data/fakeData";


describe("Testing PhotoWall />", () => {
  test("should render PhotoWall", () => {
    render(
      <Provider>
        <Router>
            <PhotoWall {...posts}/>
        </Router>
      </Provider>
    );
    const billtest = screen.getByTestId("PhotoWall");
    expect(billtest).toBeInTheDocument();
  });
});