import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
  it("renders contact form", () => {
      
    render(<ContactForm />);

    const inputName = screen.getByLabelText("Wpisz swoje imię");
    const inputEmail = screen.getByLabelText("Wpisz swój email");
    const inputMessage = screen.getByLabelText("Wpisz swoją wiadomość");

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });
});
