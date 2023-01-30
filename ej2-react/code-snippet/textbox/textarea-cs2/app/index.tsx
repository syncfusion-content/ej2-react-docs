


import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

  function App() {
      return (
        <div className="multiline">
              <TextBoxComponent multiline={true} placeholder='Enter your address' value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center'/>
        </div>
      );
  }

ReactDOM.render(<App />, document.getElementById('default'));


