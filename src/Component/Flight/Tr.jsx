import React, { useState } from 'react';

// import './Flight.css'

function Tr(props) {
  return (
    <tr className={props.calss_name} onClick={() => {props.setDetailsOfPerson(false)}}>
      <td> سورية</td>
      <td>الكويت </td>
      <td>12-12-2012 </td>
      <td>12-12-2012 </td>
      <td>1500$</td>
      <td>75</td>
    </tr>
  );
}
export default Tr;
