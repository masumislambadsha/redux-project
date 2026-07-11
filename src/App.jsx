import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar";
import { store } from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <SearchBar />
      </Provider>

    </div>
  );
};

export default App;
