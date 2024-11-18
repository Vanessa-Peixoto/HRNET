import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { MemoryRouter } from "react-router-dom";
import CreateEmployee from "../../pages/CreateEmployee/CreateEmployee";

const renderCreateEmployee = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateEmployee />
      </MemoryRouter>
    </Provider>
  );
};

describe("CreateEmployee", () => {
    it("should render the employee list page with correct elements", () => {
        renderCreateEmployee();
        
        expect(screen.getByText(/HRnet/i)).toBeInTheDocument();
        expect(screen.getByText(/Create Employee/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /View Current Employees/i })).toBeInTheDocument();
    })
})

