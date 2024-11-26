import { render, screen, fireEvent } from "@testing-library/react";
import EmployeeList from "../../pages/EmployeeList/EmployeeList";
import { Provider } from "react-redux";
import store from "../../app/store";
import { MemoryRouter } from "react-router-dom";

const renderEmployeeList = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <EmployeeList />
      </MemoryRouter>
    </Provider>
  );
};

describe("EmployeeList", () => {
  it("should render the employee list page with correct elements", () => {
    renderEmployeeList();

    expect(screen.getByText(/HRnet/)).toBeInTheDocument();
    expect(screen.getByText(/Current Employees/)).toBeInTheDocument();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });

  it("should update search query and filter employee list", () => {
    renderEmployeeList();

    const searchInput = screen.getByLabelText("Search");
    fireEvent.change(searchInput, { target: { value: "Alice" } });

    const employeeName = screen.getByText(/Alice/);
    expect(employeeName).toBeInTheDocument();
  });

  it("should update entries per page", () => {
    renderEmployeeList();

    const entriesSelect = screen.getByLabelText(/Show/) as HTMLSelectElement;
    fireEvent.change(entriesSelect, { target: { value: "25" } });
    expect(entriesSelect.value).toBe("25");
  });
});