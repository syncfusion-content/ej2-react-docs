

import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// Name and Value attribute in form submit.
function App() {
  return (
    <form>
      <ul>
          <li><RadioButtonComponent name="payment" value="credit/debit" label="Credit /Debit card" checked={true} /></li>

          <li><RadioButtonComponent name="payment" value="netbanking" label="Net Banking" /></li>

          <li><RadioButtonComponent name="payment" value="cashondelivery" label="Cash On Delivery" /></li>

          <li><RadioButtonComponent name="payment" value="others" label="Others" /></li>

          <li><ButtonComponent isPrimary={true}>Submit</ButtonComponent></li>
      </ul>
    </form>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('radio-button'));


