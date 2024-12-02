import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import './main.css'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
    </PersistGate>
  </Provider>
);
