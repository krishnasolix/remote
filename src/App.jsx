import React, { useEffect } from "react";
import "./App.css";
import reducer, { changeAppNameAction } from "./reducer";
import { useSelector, Provider } from "react-redux";

const remoteAppScope = "remoteApp";

const App = (props) => {
  const data = useSelector((state) => {
    debugger;
    return state;
  });
  return (
    <div className="App">
      <header className="App-header" data-e2e="REMOTE_COMPONENT_INFO">
        Remote Application
        {JSON.stringify(data)}
      </header>
    </div>
  );
};

const AppWrapper = (props) => {
  const { store } = props;
  useEffect(() => {
    if (store) store.injectReducer(remoteAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
