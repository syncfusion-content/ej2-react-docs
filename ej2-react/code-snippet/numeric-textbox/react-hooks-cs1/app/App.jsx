import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from 'react';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
let formObject;
function App() {
    const [totalAmount, setTotalAmount] = useState('');
    const initialState = { price: '', count: '' };
    const priceValueRef = useRef(null);
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
        setTotalAmount(event.value);
    };
    const update = (field) => (event) => {
        //update action is dispatched and triggered state changes
        dispatch({ type: 'update', field, value: event.value });
    };
    useEffect(() => {
        priceValueRef.current.value = 100;
        const options = {
            // validation rules
            rules: {
                price: {
                    required: [true, '* Please enter your price'],
                },
                count: {
                    required: [true, '* Please enter your count'],
                },
                amount: {
                    required: [true, '* Please enter your amount'],
                },
            },
        };
        // Initialize the form validator
        formObject = new FormValidator('#form1', options);
    }, []);
    return (<div>
      <div className="control_wrapper" id="control_wrapper">
        <h3 className="form-title">Purchase</h3>
        <div className="control_wrapper textbox-form">
          <form id="form1" method="post">
            <div className="form-group">
              <NumericTextBoxComponent ref={priceValueRef} name="price" value={state.price} change={update('price')} placeholder="Price of the item" floatLabelType="Auto" data-msg-containerid="errroForPrice"/>
              <div id="errroForPrice"/>
            </div>
            <div className="form-group">
              <NumericTextBoxComponent name="count" value={state.count} change={update('count')} placeholder="Number of items" floatLabelType="Auto" data-msg-containerid="errroForCount"/>
              <div id="errroForCount"/>
            </div>
            <div className="form-group">
              <NumericTextBoxComponent name="amount" value={totalAmount} change={changeHandler} multiline="true" placeholder="Total amount" floatLabelType="Auto" data-msg-containerid="errroForAmount"/>
              <div id="errroForAmount"/>
            </div>
          </form>
        </div>
        <br />
        <br />
      </div>
    </div>);
}
export default App;
