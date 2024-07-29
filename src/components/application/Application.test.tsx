import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);
        // // textbox: to get input textbox
        // const nameElement = screen.getByRole("textbox");
        // expect(nameElement).toBeInTheDocument();
        // Get the input element by its label text
        const nameElement = screen.getByLabelText('Name');
        expect(nameElement).toBeInTheDocument();
     });
});