import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";
function App() {
    function buttonClick() {
        DialogUtility.alert({
            animationSettings: { effect: 'Zoom' },
            closeOnEscape: true,
            content: "This is an Alert Dialog!",
            okButton: { text: 'OK', click: okClick.bind(this) },
            showCloseIcon: true,
            title: 'Alert Dialog'
        });
    }
    function okClick() {
        alert('you clicked OK button');
    }
    return (<button className="e-control e-btn" onClick={buttonClick.bind(this)} id="targetButton" role="button">Open Alert Dialog</button>);
}
export default App;
