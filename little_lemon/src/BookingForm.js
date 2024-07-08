import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm({availableTimes, updateTimes, submitForm}) {
    const [time, setTime] = useState(availableTimes.times[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('birthday');
    const [guestError, setGuestError] = useState('');
    const handleSubmit = (e) => {
        submitForm(e);
        e.preventDefault();
    }

    useEffect(() => {
        setTime(availableTimes.times[0])
    }, [availableTimes])

    const handleOnGuestOnChange = (e) => {
        const num = e.target.value;
        setGuestError( num > 10 || num < 1 ? 'Need to be between 1 and 10 inclusively' : '');
        setGuests(num);
    }
    return (
        <div style={{width: '100%', display: 'flex', justifyContent:'center', padding: '4%'}}>
        <form style={{display: 'grid', width: '200px', gap: '10px'}} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
                id="res-date"
                value={availableTimes.date.toISOString().split('T')[0]}
                style={{width: '100%'}}
                onChange={(e) => {
                    updateTimes((new Date(e.target.value)))}
                } />
            <label htmlFor="res-time" >Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.times.map((time) => {
                    return (
                        <option value={time} key={time}>{time}</option>
                    )
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleOnGuestOnChange}/>
            {guestError !== '' && <p style={{color: 'red', width: '100%'}}>{guestError}</p> }
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