


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    function buttonClick() {
        DialogUtility.alert({
            title: 'About SYNCFUSION Succinctly Serires',
            content: ' The Succinctly series was born in 2012 out of a desire to provide concise technical e-books for software developers.',
            cssClass : 'customClass'
        });
    }

    return (
        <div className="App" id='dialog-target'>
            <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={buttonClick.bind(this)}>Alert</ButtonComponent>
        </div>
    );
}
export default App;



