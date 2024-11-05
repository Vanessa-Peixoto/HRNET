import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  </Provider>
);
