import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
