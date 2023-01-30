

import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes MaskedTextBox component
// sets value to the MaskedTextBox
export default class App extends React.Component<{}, {}> {
    public render() {
        return (
          <div>
            <label className='label'>Enter the mobile number</label>
            <MaskedTextBoxComponent mask={'000-000-0000'} />
          </div>
        );
    }
};
ReactDOM.render(<App />, document.getElementById('maskedContainer'));


