import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import {act} from 'react-dom/test-utils';
import WalkerInfo from '../../components/auth/register/walkerInfo/walkerInfo1/walkerInfo'
import WalkerSettings from '../../components/settings/walker/walkerSettings';
import WalkerDashboard from '../../components/dashboard/walker/walkerDashboard';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container);
    container = null
})

test("`h1` will render on the page", () => {
    act(() => {
        ReactDOM.render(<Provider store={store}><WalkerInfo /></Provider>, container);
    })

    const h1 = container.querySelector("h1");
    expect(h1.textContent).toBe("Dog Walker");
})

test("`h3` will render on the page", () => {
    act(() => {
        ReactDOM.render(<Provider store={store}><WalkerSettings /></Provider>, container);
    })

    const h3 = container.querySelector("h3");
    expect(h3.textContent).toBe("First name:");
})

test("`h3` will render on the page", () => {
    act(() => {
        ReactDOM.render(<Provider store={store}><WalkerSettings /></Provider>, container);
    })

    const h3 = container.querySelector("h3:nth-child(3)");
    expect(h3.textContent).toBe("Last name:");
})

test("`button` will render on the page", () => {
    act(() => {
        ReactDOM.render(<Provider store={store}><WalkerSettings /></Provider>, container);
    })

    const button = container.querySelector("button");
    expect(button.textContent).toBe("Done");
})


test("`h3` will render on the page", () => {
    act(() => {
        ReactDOM.render(<Provider store={store}><WalkerDashboard /></Provider>, container);
    })

    const h3 = container.querySelector("h3");
    expect(h3.textContent).toBe("No walks scheduled at this time.");
})