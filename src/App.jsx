import { Provider } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routing/AllRoutes";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <AllRoutes />
        <Footer />
      </div> 
    </Provider>
  );
};

export default App;
