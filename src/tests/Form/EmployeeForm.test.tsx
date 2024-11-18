import { render, screen, fireEvent } from "@testing-library/react";
import EmployeeForm from "../../component/Form/EmployeeForm";
import { Provider } from "react-redux";
import store from "../../app/store";

const renderEmployeeForm = () => {
  render(
    <Provider store={store}>
      <EmployeeForm onFormSubmit={() => {}} />
    </Provider>
  );
};

describe("EmployeeForm", () => {
  it("should render the form inputs and button", () => {
    renderEmployeeForm();

    // Vérification de la présence des champs dans le formulaire
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Save/i })).toBeInTheDocument();
  });

  it("should update firstname in the form state", () => {
    renderEmployeeForm();

    // 3. Trouver le champ 'First Name' et le remplir
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });

    // 4. Vérifier si l'état Redux est mis à jour
    expect(screen.getByLabelText(/First Name/i)).toHaveValue("John");
  });

  it("should not submit the form if the filed lastname are empty", () => {
    renderEmployeeForm();

    const btnSave = screen.getByRole("button", { name: /Save/i });
    fireEvent.click(btnSave);
    expect(screen.getByLabelText(/Last Name/i)).toBeInvalid();
  });
});
