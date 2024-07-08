import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    let availableTimes = {
        '2024-07-07': ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    }
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText(/Choose Date/i);
    expect(headingElement).toBeInTheDocument();
})