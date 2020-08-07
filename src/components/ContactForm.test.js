import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without errors", () => {
  render(<ContactForm />);
});
