

import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent, closest } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    function clickEventHandler(): void {
       let signature: SignatureComponent = getComponent(document.getElementById('signature'), 'signature');
       let url: string = document.getElementById('text').value;
       signature.backgroundImage = url;
    }
    return (
        <div id='container'>
            <div id="signature-base-control">
                <div id="input">
                    <input type="text" id="text" placeholder="Enter the URL of the background Image"></input>
                    <ButtonComponent onClick={clickEventHandler} isPrimary={true}>Set Background Image</ButtonComponent>
                </div>
                <div id="signature-control">
                    <SignatureComponent id='signature'/>
                </div>
            </div>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



