

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

    function App() {
        return (
             <div className="App">
                <div className="textboxes">
                    <h4>FloatLabelType as Auto</h4>
                    <TextBoxComponent placeholder="First Name" floatLabelType="Auto"/>
                </div>
                <div className="textboxes">
                    <h4>FloatLabelType as Always</h4>
                    <TextBoxComponent placeholder="Last Name" floatLabelType="Always"/>
                </div>
            </div>
        )
    };

ReactDOM.render(<App />, document.getElementById('input-container'));


