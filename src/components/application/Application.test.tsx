import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);
        // Get the input textbox by its accessible name
        // const nameElement = screen.getByRole("textbox");
        // expect(nameElement).toBeInTheDocument();

        //getbyRoleOptions
        // Get the input textbox by its accessible name
        const nameElement = screen.getByRole("textbox", { name: "Name" });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", { name: "Bio" });
        expect(bioElement).toBeInTheDocument();
        //used when we have a single heading element
        // const pageHeading = screen.getByRole("heading");
        // expect(pageHeading).toBeInTheDocument();
        // multiple heading
        const pageHeading = screen.getByRole("heading", { level: 1 });
        expect(pageHeading).toBeInTheDocument();
        const sectionHeading = screen.getByRole("heading", { level: 2 });
        expect(sectionHeading).toBeInTheDocument();

        const dropDownElement = screen.getByRole("combobox");
        expect(dropDownElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()

        // getByLabelText
        const nameElement2 = screen.getByLabelText('Name');
        expect(nameElement2).toBeInTheDocument();
        // getByPlaceholderText
        const placeholderElement = screen.getByPlaceholderText('Fullname')
        expect(placeholderElement).toBeInTheDocument()

        //getByText
        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        //getByDisplayValue
        const nameElement3 = screen.getByDisplayValue('Vishwas')
        expect(nameElement3).toBeInTheDocument()

        //getByAltText
        const imgElement = screen.getByAltText('a person with a laptop')
        expect(imgElement).toBeInTheDocument()

        //getByTitle
        const titleElement = screen.getByTitle('close')
        expect(titleElement).toBeInTheDocument()
        
        //getByTestId
        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()
    });
});