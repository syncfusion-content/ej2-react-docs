import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    function clickEventHandler() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let sign = document.getElementById('text').value;
        signature.load(sign);
    }
    return (<div id='container'>
            <div id="signature-base-control">
                <div id="input">
                    <input type="text" id="text" placeholder="Enter the Base64 or URL of signature"></input>
                    <ButtonComponent onClick={clickEventHandler} isPrimary={true}>Open</ButtonComponent>
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
