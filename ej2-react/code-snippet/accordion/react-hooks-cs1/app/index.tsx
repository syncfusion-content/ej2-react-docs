import { useState } from 'react';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { AccordionComponent } from '@syncfusion/ej2-react-navigations';


const App = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        <AccordionComponent>
          <div>
            <div>
              <div> TextBox </div>
            </div>
            <div>
              <div>
                <TextBoxComponent placeholder="Enter Name" value={name} input={(e) => setName(e.value)} ></TextBoxComponent>
                <div>My name is {name}</div>
              </div>
            </div>
          </div>
        </AccordionComponent>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


