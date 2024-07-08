import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { Routes, Route, Outlet, Link, useNavigate} from "react-router-dom";
import BookingForm from './BookingForm';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './api';
import { ConfirmationBooking } from './ConfirmationBooking';

const reducer = (_, action) => {
  return {
    date: action.date,
    times: fetchAPI(action.date)
  }
}

function App() {
  const curDate = new Date();
  let initialState = {
    date: curDate,
    times: fetchAPI(curDate)
  };
  const [availableTimes, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const submitForm = (e) => {
    if (submitAPI(e) ===  true) {
      navigate('booking/confirmed');
    }
  }
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="booking">
        <Route index element={
          <BookingForm availableTimes={availableTimes}
            updateTimes={(date) => dispatch({date})}
            submitForm={submitForm}
          />} />
        <Route path="confirmed" element={<ConfirmationBooking />}></Route>
      </Route>
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
