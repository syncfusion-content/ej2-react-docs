

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component<{}, {}> {
    public render() {
        return (
              <div className="App">
                <div className="textboxes">
                    <h4>Textbox with clear button</h4>
                    <TextBoxComponent placeholder="First Name" showClearButton= {true} floatLabelType="Never"/>
                </div>
                <div className="textboxes">
                    <h4>Floating textbox with clear button</h4>
                    <TextBoxComponent placeholder="Last Name" showClearButton= {true} floatLabelType="Auto"/>
                </div>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('input-container'));


