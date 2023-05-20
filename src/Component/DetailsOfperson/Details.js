import { useState } from 'react';
import NumberOf from './NumberOfPerson/NumberOfPerson';
import DetailsOfMultiplePerson from './DetailsOfMultiplePerson/DetailsOfMultiplePerson';
import React, { Component } from 'react';
export default function DetailsOfPerson() {
  const [NumberOfPerson, setNumberOfPerson] = useState({
    state: true,
    value: 0,
  });
  return (
    <>
      {NumberOfPerson.state && <NumberOf state={setNumberOfPerson} />}
      {NumberOfPerson.value > 0 && (
        <DetailsOfMultiplePerson
          NumberOfperson={NumberOfPerson.value}
          setNumberOfPerson={setNumberOfPerson}
        />
      )}
    </>
  );
}
