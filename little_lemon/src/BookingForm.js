import { useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export const dateToString = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function BookingForm({availableTimes, updateTimes}) {
    const possibleDates = Object.keys(availableTimes).filter((date) => availableTimes[date].length > 0);
    const [date, setDate] = useState(possibleDates[0]);
    const [time, setTime] = useState(availableTimes[possibleDates[0]][0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('birthday');
    const handleSubmit = (e) => {
        console.log(date, time);
        updateTimes(date, time);
        e.preventDefault();
        alert('success');
    }
    return (
        <div style={{width: '100%', display: 'flex', justifyContent:'center', padding: '4%'}}>
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
            <DatePicker id="res-date" onChange={(date) => setDate(dateToString(date))} selected={date} includeDates={possibleDates}/>
            <label for="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes[date].map((time) => {
                    return (
                        <option value={time} key={time}>{time}</option>
                    )
                })}
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label for="occasion">Occasion</label>
            <select value={occasion} id="occasion" onChange={(e) => {setOccasion(e.target.value)}}>
                <option value="birthday" >Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
            </form>
        </div>
    )
}

export default BookingForm;