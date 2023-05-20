import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/navbar';

export default function Header() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
