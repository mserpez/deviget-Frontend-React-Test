// Vendor
import React from "react";

// Redux
import { Provider } from "react-redux";
import { store } from "./providers/redux";

// Containers
import { Reddit } from "./containers/Reddit";

function App() {
  return (
    <Provider store={store}>
      <Reddit />
    </Provider>
  );
}

export default App;
