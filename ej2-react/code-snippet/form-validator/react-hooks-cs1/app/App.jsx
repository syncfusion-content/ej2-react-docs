import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from "react";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
let formObject;
function App() {
    const userNameRef = useRef(null);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const initialState = { email: '', password: '' };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.field]: action.value };
            default:
                return initialState;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const dateChangeHandler = (event) => {
        setDateOfBirth(event.value);
    };
    const update = (field) => (event) => {
        //update action is dispatched to update the email and password state value
        dispatch({ type: 'update', field, value: event.value });
    };
    useEffect(() => {
        userNameRef.current.focusIn();
        const options = {
            // validation rules
            rules: {
                email: {
                    required: [true, '* Please enter your email'],
                },
                password: {
                    required: [true, '* Please enter your password'],
                },
                date: {
                    required: [true, '* Please enter your date of birth'],
                },
            },
        };
        // Initialize the form validator
        formObject = new FormValidator('#form1', options);
    }, []);
    const onSubmit = () => {
        formObject.validate();
        if (formObject.validate()) {
            formObject.element.reset();
        }
    };
    return (<div>
      <div className="control_wrapper" id="control_wrapper">
        <h3 className="form-title">User Login</h3>
        <div className="control_wrapper textbox-form">
          <form id="form1" method="post">
            <div className="form-group">
              <TextBoxComponent ref={userNameRef} type="email" name="email" value={state.email} change={update('email')} placeholder="Username" floatLabelType="Auto" data-msg-containerid="errroForEmail"/>
              <div id="errroForEmail"/>
            </div>
            <div className="form-group">
              <TextBoxComponent type="password" name="password" value={state.password} change={update('password')} placeholder="Password" floatLabelType="Auto" data-msg-containerid="errroForPassword"/>
              <div id="errroForPassword"/>
            </div>
            <div className="form-group">
              <DatePickerComponent name="date" value={dateOfBirth} change={dateChangeHandler} placeholder="Date of Birth" floatLabelType="Auto" data-msg-containerid="errroForDateOfBirth"/>
              <div id="errroForDateOfBirth"/>
            </div>
          </form>
          <div className="submitBtn">
            <ButtonComponent onClick={onSubmit}>Submit</ButtonComponent>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>);
}
export default App;
