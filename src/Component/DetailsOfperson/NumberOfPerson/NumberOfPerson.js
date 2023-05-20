import { useState } from 'react';
import classes from './NumberOfPerson.module.css'
import React, { Component } from 'react';
export default function NumberOf(props){
    const [isValid , setIsValid] =useState(true);
    function SubmitAction (event){
        event.preventDefault();
        const value = event.target[0].value;
        const regex = /^([0-9]+)$/;
        if(regex.test(value)){
            if(parseInt(value) > 0 && parseInt(value) < 20){
                setIsValid(true);
                props.state({state : false , value : value});
            }else{
                setIsValid(false);
            }
        }else{
            setIsValid(false);
        }
    }
    return(
        <div className={classes.NumberOf}>
            <div className={classes.container}>
                <h1>أختر عدد المسافرين:</h1>
                <form action="" onSubmit={SubmitAction}>
                    <div>
                        <input type="text" name="" id="" />
                        {!isValid && <p>يجب أن يكون منطقي </p>}
                    </div>
                    <button>التالي</button>
                </form>
            </div>
        </div>
    )

}