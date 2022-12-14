import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import noteReducer from "./reducers/noteReducer";

const store = createStore(noteReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

renderApp();
store.subscribe(renderApp);
