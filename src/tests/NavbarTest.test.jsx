import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Form from "../Components/Form";

test('Form component rendering', () => {
    render(<Form/>);

    const inputFullName = screen.getByRole("fullName");
    const inputEmail = screen.getByRole("email");
    const btnSubmit= screen.getByRole("button"); 

    expect(inputFullName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
})

test('Form submission success', async () => {
    render(<Form/>);

    const inputName =  screen.getByRole("fullName");
    fireEvent.change(inputName, {target: {value: 'Wilson'}});

    const inputEmail = screen.getByRole("email");
    fireEvent.change(inputEmail, {target: {value: 'wilson@gamil.com'}});

    const btnSubmit= screen.getByRole("button"); 
    fireEvent.click(btnSubmit);

    const wordMeaning = await screen.findByText('Thank you Wilson, we will contact you as soon as possible via email.');

    expect(wordMeaning).toBeInTheDocument();
})

test('Form submission fullName length error', async () => {
    render(<Form/>);

    const inputName =  screen.getByRole("fullName");
    fireEvent.change(inputName, {target: {value: 'Ana'}});

    const inputEmail = screen.getByRole("email");
    fireEvent.change(inputEmail, {target: {value: 'ana@gamil.com'}});

    const btnSubmit= screen.getByRole("button"); 
    fireEvent.click(btnSubmit);

    const wordMeaning = await screen.findByText('Please check your information again.');

    expect(wordMeaning).toBeInTheDocument();
});