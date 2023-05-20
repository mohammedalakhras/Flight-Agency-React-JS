import React, { useState } from 'react';
import classes from './Flight.module.css';
// import './Flight.css';
import Tr from './Tr';

function FlightDetils(props) {
  let height;
  let body = document.body;
  console.log(body);
  return (
    <div className={classes.body}>
      <table className={classes.table} border={1}>
        <tr className={classes.tr}>
          <th> مدينة الانطلاق</th>
          <th> مدينة الهبوط</th>
          <th> تاريخ الوصول </th>
          <th> تاريخ المغادرة </th>
          <th>الكلفة</th>
          <th>عدد المسافرين</th>
        </tr>
        <Tr calss_name="tr2" setDetailsOfPerson={props.setDetailsOfPerson}/>
        <Tr calss_name="tr1" />
        <Tr calss_name="tr2" />
        <Tr calss_name="tr1" />
        <Tr calss_name="tr2" />
        <Tr calss_name="tr1" />
      </table>
    </div>
  );
}
export default FlightDetils;
