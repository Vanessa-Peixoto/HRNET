import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import { MemoryRouter } from "react-router-dom";
import CreateEmployee from "../../pages/CreateEmployee/CreateEmployee";

//For the modal
beforeAll(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
});

afterAll(() => {
  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    document.body.removeChild(modalRoot);
  }
});

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
  it("should render the create employee page with correct elements", () => {
    renderCreateEmployee();

    expect(screen.getByText(/HRnet/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Employee/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /View Current Employees/i })
    ).toBeInTheDocument();
  });

  it("should render modal after submission form", async () => {
    renderCreateEmployee();

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const DateOfBirthInput = screen.getByLabelText(/Date of Birth/i);
    const StartDateInput = screen.getByLabelText(/Start Date/i);
    const StreetInput = screen.getByLabelText(/Street/i);
    const CityInput = screen.getByLabelText(/City/i);
    const StateInput = screen.getByLabelText(/State/i);
    const ZipCodeInput = screen.getByLabelText(/Zip Code/i);
    const DepartmentInput = screen.getByLabelText(/Department/i);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(DateOfBirthInput, { target: { value: "12/23/2024" } });
    fireEvent.change(StartDateInput, { target: { value: "12/23/2024" } });
    fireEvent.change(StreetInput, { target: { value: "12 rue de la jungle" } });
    fireEvent.change(CityInput, { target: { value: "London" } });
    fireEvent.change(StateInput, { target: { value: "WV" } });
    fireEvent.change(ZipCodeInput, { target: { value: 1 } });
    fireEvent.change(DepartmentInput, { target: { value: "Sales" } });

    const submitButton = screen.getByRole("button", { name: "Save" });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText((content) => content.includes("Employee crée"))
      ).toBeInTheDocument();
    });
  });

  it("should close modal when clicked in the button", () => {
    renderCreateEmployee();

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const DateOfBirthInput = screen.getByLabelText(/Date of Birth/i);
    const StartDateInput = screen.getByLabelText(/Start Date/i);
    const StreetInput = screen.getByLabelText(/Street/i);
    const CityInput = screen.getByLabelText(/City/i);
    const StateInput = screen.getByLabelText(/State/i);
    const ZipCodeInput = screen.getByLabelText(/Zip Code/i);
    const DepartmentInput = screen.getByLabelText(/Department/i);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(DateOfBirthInput, { target: { value: "12/23/2024" } });
    fireEvent.change(StartDateInput, { target: { value: "12/23/2024" } });
    fireEvent.change(StreetInput, { target: { value: "12 rue de la jungle" } });
    fireEvent.change(CityInput, { target: { value: "London" } });
    fireEvent.change(StateInput, { target: { value: "WV" } });
    fireEvent.change(ZipCodeInput, { target: { value: 1 } });
    fireEvent.change(DepartmentInput, { target: { value: "Sales" } });

    const submitButton = screen.getByRole("button", { name: "Save" });
    fireEvent.click(submitButton);

    expect(
      screen.getByText((content) => content.includes("Employee crée"))
    ).toBeInTheDocument();

    const closeModal = screen.getByRole("button", { name: "X" });
    fireEvent.click(closeModal);

    expect(screen.queryByText(/Employee crée/i)).not.toBeInTheDocument();
  });
});