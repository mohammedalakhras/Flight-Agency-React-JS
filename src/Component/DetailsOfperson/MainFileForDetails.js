import classes from './MainFileForDetails.module.css';
import DetailsOfPerson from './Details';
import React, { Component } from 'react';
export default function MainFileForDetails() {
  return (
    <div className={classes.body}>
      <DetailsOfPerson />
    </div>
  );
}
