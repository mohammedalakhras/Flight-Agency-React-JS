import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
// import './Flight.css';
import classes from './Flight.module.css';
import FlightDetils from './FlightDetils';

function App(props) {
  return (
    <div className={classes.body}>
      <h2 className={classes.h2}>جميع الرحلات المتاحة بين التاريخ المحدد </h2>

      <FlightDetils />
    </div>
  );
}

export default App;
