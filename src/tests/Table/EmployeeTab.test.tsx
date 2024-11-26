import { render, screen, fireEvent } from "@testing-library/react";
import EmployeeTab from "../../component/Table/EmployeeTab";
import { Provider } from "react-redux";
import store from "../../app/store";

const mockEmployees = [
  {
    firstname: "Alice",
    lastname: "Martin",
    dateOfBirth: "1986-08-15",
    startDate: "2019-02-10",
    street: "123 Maple St",
    city: "Phoenix",
    state: "AZ",
    zipCode: "85001",
    department: "Engineering",
  },
  {
    firstname: "Bob",
    lastname: "Dupont",
    dateOfBirth: "1990-03-05",
    startDate: "2020-07-23",
    street: "456 Oak St",
    city: "Austin",
    state: "TX",
    zipCode: "73301",
    department: "Sales",
  },
];

//Render the component with mocked data
const renderEmployeeTab = (props = {}) => {
  const defaultProps = {
    searchQuery: "",
    currentEmployees: mockEmployees,
    ...props,
  };

  render(
    <Provider store={store}>
      <EmployeeTab {...defaultProps} />
    </Provider>
  );
};

describe("EmployeeTab", () => {
  it("should render the tab with data", () => {
    renderEmployeeTab();

    expect(screen.getByText(/Alice/)).toBeInTheDocument();
    expect(screen.getByText(/Martin/)).toBeInTheDocument();
    expect(screen.getByText(/Engineering/)).toBeInTheDocument();
    expect(screen.getByText(/Bob/)).toBeInTheDocument();
    expect(screen.getByText(/Dupont/)).toBeInTheDocument();
    expect(screen.getByText(/Sales/)).toBeInTheDocument();
  });

  it("should sort employees by column when clicking on header", () => {
    renderEmployeeTab();

    const firstnameHeader = screen.getByRole("columnheader", {
      name: /firstname/i,
    });
    fireEvent.click(firstnameHeader);
    const sortedEmployees = screen.getAllByRole("row");
    expect(sortedEmployees[1]).toHaveTextContent("Bob");
    expect(sortedEmployees[2]).toHaveTextContent("Alice");
  });

  it("should filtered employees based on search query", () => {
    renderEmployeeTab({ searchQuery: "Alice" });

    const employeesList = screen.getByText(/Alice/);
    expect(employeesList).toBeInTheDocument();
  });
});