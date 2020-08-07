import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without errors", () => {
  render(<ContactForm />);
});

test("adds user to contact form without errors", async() => {
  render(<ContactForm />);

  const firstName = screen.getByPlaceholderText("Edd"),
        lastName = screen.getByPlaceholderText("Burke"),
        email = screen.getByPlaceholderText("bluebill1049@hotmail.com"),
        message = screen.getByTestId("message"),
        submitButton = screen.getByTestId(/button/i);

  fireEvent.change(firstName, { target: { value: "Harry" } });
  fireEvent.change(lastName, { target: { value: "Gebel" } });
  fireEvent.change(email, { target: { value: "harry@gebel.tech" } });
  fireEvent.change(
    message, { target: { value: "Had this been a real emergency." } });

  fireEvent.click(submitButton);
});

//  LocalWords:  gebel
