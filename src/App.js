import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose="500"
        limit="1"
        style={{ top: "4.5em", right: "0em" }}
      />
      <AppRoutes />
    </div>
  );
}

export default App;
