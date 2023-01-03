import React from "react";
import { ReactDOM } from "react-dom";
import Main from "../Main";

it('shows a title', ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<App/>, div);

    // expect(div.innerHTML).toContain('');
    ReactDOM.unmountComponentAtNode(div);
});