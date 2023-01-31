import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    function clickEventHandler() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let color = document.getElementById('text').value;
        signature.strokeColor = color;
    }
    return (<div id='container'>
            <div id="signature-base-control">
                <div id="input">
                    <input type="text" id="text" placeholder="Enter the Stroke Color Value"></input>
                    <ButtonComponent onClick={clickEventHandler} isPrimary={true}>Set Stroke Color</ButtonComponent>
                </div>
                <div id="signature-control">
                    <SignatureComponent id='signature'/>
                </div>
            </div>
        </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
