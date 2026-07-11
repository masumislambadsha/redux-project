import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar";
import { store } from "./redux/store";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <SearchBar />
        <Tabs />
      </Provider>

    </div>
  );
};

export default App;
