import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import BookingForm, {dateToString} from './BookingForm';
import { useReducer } from 'react';

const reducer = (state, action) => {
  const {date, time} = action;
  let dateToChange = JSON.parse(JSON.stringify(state[date]));
  let newDateEntry = dateToChange.filter((iTime) => iTime !== time);
  let newObject = {};
  newObject[date] = newDateEntry;
  return {
    ...state,
    ...newObject
  }
}

function App() {
  const date = new Date();
  let initialState = {};
  for (let i = 0; i < 7; i++) {
    date.setDate(date.getDate() + 1);
    const key = dateToString(date);
    initialState[key] = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  const [availableTimes, dispatch] = useReducer(reducer, initialState);
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="booking" element={<BookingForm availableTimes={availableTimes} updateTimes={(date, time) => dispatch({date, time})}/>} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  );
}

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  )
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
