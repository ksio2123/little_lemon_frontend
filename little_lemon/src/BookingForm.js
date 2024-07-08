import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function BookingForm({availableTimes, updateTimes, submitForm}) {
    const [date, setDate] = useState(availableTimes.date);
    const [time, setTime] = useState(availableTimes.times[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('birthday');
    const handleSubmit = (e) => {
        submitForm(e);
        e.preventDefault();
    }

    useEffect(() => {
        setDate(availableTimes.date);
        setTime(availableTimes.times[0])
    }, [availableTimes])
    return (
        <div style={{width: '100%', display: 'flex', justifyContent:'center', padding: '4%'}}>
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            {/* <DatePicker id="res-date" onChange={(date) => updateTimes(date)} selected={date} /> */}
            <input type="date"
                id="res-date"
                value={date.toISOString().split('T')[0]}
                onChange={(e) => {
                    updateTimes((new Date(e.target.value)))}
                } />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.times.map((time) => {
                    return (
                        <option value={time} key={time}>{time}</option>
                    )
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
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