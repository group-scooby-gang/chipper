import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils"
// import App from "../App";
import About from "./../../components/about/About"
import Landing from "./../../components/landing/Landing"

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container)
})

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null
})

test(`"The H2's" should render correct names`, () => {
    act(() => {
        ReactDOM.render(<About />, container)
    })

    const h2 = container.querySelector("h2");
    expect(h2.textContent).toBe("Josef Walls")
})


test(`"The h4" should render the correct positions`, () => {
    act(() => {
        ReactDOM.render(<About />, container)
    })

    const h4 = container.querySelector("h4")
    expect(h4.textContent).toBe("Assistant to the HR Manager, Front and Back End Developer")
})

test(`"The p" should render the correct description`, () => {
    act(() => {
        ReactDOM.render(<About />, container)
    })

    const p = container.querySelector("p")
    expect(p.textContent).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam vel. Mattis molestie a iaculis at erat pellentesque adipiscing. Facilisis volutpat est velit egestas dui id ornare arcu odio.")
})

test(`"The H1" should render the correct title`, () => {
    act(() => {
        ReactDOM.render(<About />, container)
    })

    const h1 = container.querySelector("h1")
    expect(h1.textContent).toBe("About the Chipper Gang")
})

test (`"The Image" should correctly render the correct image`, () => {
    act(() => {
        ReactDOM.render(<About />, container)
    })

    const img = container.querySelector("img")
    expect(img.src).toBe("https://i.imgur.com/y26JTIW.png")
})

