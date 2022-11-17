import React, { Fragment } from 'react';
import Header from './Header';
import LoginModal from './LoginModal';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import Verify from './Verify';
import ApplicationForInsurance from './ApplicationForInsurance';
import Payment from './Payment';

export default function Main() {
  return (
    <Fragment>
      <Header />
      <LoginModal />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='verify' element={<Verify />} />
        <Route path='application-for-insurance' element={<ApplicationForInsurance />} />
        <Route path='payment' element={<Payment />} />
      </Routes>
    </Fragment>
  );
}
