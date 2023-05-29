import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";
function App() {
    function buttonClick() {
        DialogUtility.alert('This is an Alert Dialog!');
    }
    return (<button className="e-control e-btn" onClick={buttonClick} id="targetButton" role="button">Open Alert Dialog</button>);
}
export default App;
