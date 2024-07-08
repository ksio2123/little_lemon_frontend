import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';


test('Renders the BookingForm heading', () => {
    let availableTimes = {
        times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        date: new Date()
    }
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText(/Choose Date/i);
    expect(headingElement).toBeInTheDocument();
})

test('validate initializeTimes', () => {
    let availableTimes = {
        times: ['17:00'],
        date: new Date()
    }
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText(/17:00/i);
    expect(headingElement).toBeInTheDocument();
})

test('validate updateTimes', async () => {
    let availableTimes = {
        times: ['17:00'],
        date: new Date()
    }
    const updateTimes =  jest.fn();
    const {container} = render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>);
    const datepicker = container.querySelector('#res-date');
    fireEvent.change(datepicker, {target:{value: '2020-05-24'}})
    await waitFor(() => {
        expect(updateTimes).toHaveBeenCalledTimes(1);
    });
})