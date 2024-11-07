import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import './main.css'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  </Provider>
);
