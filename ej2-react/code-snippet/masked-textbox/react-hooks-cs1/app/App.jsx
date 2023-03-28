import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from 'react';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    const [productKey, setProductKey] = useState('124-234-765-234');
    const initialState = { mobileNo: '', postalCode: '' };
    const productValueRef = useRef(null);
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
        setProductKey(event.value);
    };
    const update = (field) => (event) => {
        //update action is dispatched and triggered state changes
        dispatch({ type: 'update', field, value: event.value });
    };
    useEffect(() => {
        productValueRef.current.focusIn();
    }, []);
    return (<div>
      <div className="control_wrapper" id="control_wrapper">
        <h3 className="form-title">Purchase</h3>
        <div className="control_wrapper textbox-form">
          <form id="form1" method="post">
            <div className="form-group">
              <MaskedTextBoxComponent ref={productValueRef} name="product" mask={'000-000-000-000'} value={productKey} change={changeHandler} multiline="true" placeholder="Product key" floatLabelType="Always" data-msg-containerid="errroForAmount"/>
              <div id="errroForAmount"/>
            </div>
            <div className="form-group">
              <MaskedTextBoxComponent name="mobile" mask={'00-0000-0000'} value={state.mobileNo} change={update('mobileNo')} placeholder="Mobile Number" floatLabelType="Always" data-msg-containerid="errroForMobileNo"/>
              <div id="errroForMobileNo"/>
            </div>
            <div className="form-group">
              <MaskedTextBoxComponent name="postal" mask={'000-000'} value={state.postalCode} change={update('postalCode')} placeholder="Postal code" floatLabelType="Always" data-msg-containerid="errroForPostalCode"/>
              <div id="errroForPostalCode"/>
            </div>
          </form>
        </div>
        <br />
        <br />
      </div>
    </div>);
}
export default App;
