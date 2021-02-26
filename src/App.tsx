// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./providers/redux";

// Containers
import { Reddit } from "./containers/Reddit";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Reddit />
      </PersistGate>
    </Provider>
  );
}
