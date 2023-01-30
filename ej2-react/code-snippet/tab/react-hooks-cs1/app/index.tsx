import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App  from './App';

ReactDOM.render(<App />, document.getElementById('container'));


import { useState } from 'react';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { TabComponent } from '@syncfusion/ej2-react-navigations';


function App() {
  const [name, setName] = useState('');
  return (
    <div>
      <div className="control_wrapper" id="control_wrapper">
        <TabComponent>
          <div className="e-tab-header">
            <div> TextBox </div>
          </div>
          <div className="e-content">
            <div>
              <TextBoxComponent placeholder="Enter Name" value={name} input={(e) => setName(e.value)} ></TextBoxComponent>
              <div>My name is {name}</div>
            </div>
          </div>
        </TabComponent>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


