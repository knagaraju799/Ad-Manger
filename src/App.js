import React from "react";
import "./App.scss";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/_helpers/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
