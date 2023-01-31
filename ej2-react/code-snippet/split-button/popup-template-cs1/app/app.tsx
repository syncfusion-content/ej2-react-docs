

import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render SplitButton.
function App() {
    return (
    <div>
        <div id='dropdowntarget'>
          <div id= "first">
              <div id='black'/>
              <div id='red'/>
              <div id='green'/>
              <div id='gray'/>
              <div id='blue'/>
              <div id='violet'/>
              <div id='brown'/>
              <div id='darkgoldenrod'/>
              <div id='aquamarine'/>
          </div>
        </div>
        <SplitButtonComponent target='#dropdowntarget' iconCss= 'e-sb-icons e-color'/>
      </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));



