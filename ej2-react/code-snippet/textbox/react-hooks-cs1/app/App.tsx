

import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from 'react';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

let formObject;
function App() {
  const [description, setDescription] = useState('');
  const initialState = { name: '', email: '' };
  const userNameRef = useRef(null);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.value };

      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = (event) => {
    setDescription(event.value);
  };

  const update = (field) => (event) => {
    //update action is dispatched and triggered state changes
    dispatch({ type: 'update', field, value: event.value });
  };

  useEffect(() => {
    userNameRef.current.focusIn();
    const options = {
      // validation rules
      rules: {
        name: {
          required: [true, '* Please enter your name'],
        },
        email: {
          required: [true, '* Please enter your email'],
        },
        message: {
          required: [true, '* Please enter your message'],
        },
      },
    };
    // Initialize the form validator
    formObject = new FormValidator('#form1', options);
  }, []);

  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        <h3 className="form-title">User Detail</h3>
        <div className="control_wrapper textbox-form">
          <form id="form1" method="post">
            <div className="form-group">
              <TextBoxComponent
                ref={userNameRef}
                name="name"
                value={state.name}
                change={update('name')}
                placeholder="Name"
                floatLabelType="Auto"
                data-msg-containerid="errroForName"
              />
              <div id="errroForName" />
            </div>
            <div className="form-group">
              <TextBoxComponent
                type="email"
                name="email"
                value={state.email}
                change={update('email')}
                placeholder="Email"
                floatLabelType="Auto"
                data-msg-containerid="errroForEmail"
              />
              <div id="errroForEmail" />
            </div>
            <div className="form-group">
              <TextBoxComponent
                name="message"
                value={description}
                change={changeHandler}
                multiline="true"
                placeholder="Description"
                floatLabelType="Auto"
                data-msg-containerid="errroForMessage"
              />
              <div id="errroForMessage" />
            </div>
          </form>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
export default App;


