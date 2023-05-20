import classes from './DetailsOfMultiplePerson.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaForPersonDetails } from './yupSchema';
import React, { Component } from 'react';
import { useEffect, useRef } from 'react';
export default function DetailsOfMultiplePerson(props) {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaForPersonDetails),
  });
  function SubmitAction(data) {
    console.log(data);
    console.log(props.NumberOfperson);
    for (let i = 0; i < 5; i++) {
      formRef.current[i].value = '';
      data[Object.keys(data)[i]] = '';
    }
    console.log(data);
    props.setNumberOfPerson({ state: false, value: props.NumberOfperson - 1 });
    // console.log(formRef.current.length)
  }
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h1>معلومات المسافر {props.NumberOfperson} :</h1>
        <form action="" onSubmit={handleSubmit(SubmitAction)} ref={formRef}>
          <div>
            <div>
              <div className={classes.divOfInput}>
                <label htmlFor="name">الاسم والكنية: </label>
                <div>
                  <input type="text" id="name" {...register('name')} />
                  <p className={classes.pError}>{errors.name?.message}</p>
                </div>
              </div>
              <div className={classes.divOfInput}>
                <label htmlFor="passport">رقم ال passport :</label>
                <div>
                  <input type="text" id="passport" {...register('passport')} />
                  <p className={classes.pError}>{errors.passport?.message}</p>
                </div>
              </div>
              <div className={classes.divOfInput}>
                <label htmlFor="banckAcoutn">رقم حساب البنك:</label>
                <div>
                  <input
                    type="text"
                    id="banckAcoutn"
                    {...register('bankAcount')}
                  />
                  <p className={classes.pError}>{errors.bankAcount?.message}</p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.divOfInput}>
                <label htmlFor="fatherName">اسم الأب:</label>
                <div>
                  <input
                    type="text"
                    id="fatherName"
                    {...register('fatherName')}
                  />
                  <p className={classes.pError}>{errors.fatherName?.message}</p>
                </div>
              </div>
              <div className={classes.divOfInput}>
                <label htmlFor="weight">الوزن المحمول :</label>
                <div>
                  <input type="text" id="weight" {...register('weight')} />
                  <p className={classes.pError}>{errors.weight?.message}</p>
                </div>
              </div>
              <div className={classes.divOfInput}>
                <div>
                  <div>
                    <label htmlFor="state1">حجز دائم : </label>
                    <div>
                      <input
                        type="radio"
                        name="state"
                        id="state1"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state">حجز مؤقت: </label>
                    <div>
                      <input type="radio" name="state" id="state" />
                    </div>
                  </div>
                </div>
              </div>
              <button>التالي</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
