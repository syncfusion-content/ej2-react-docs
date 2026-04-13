import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    function buttonClick() {
        DialogUtility.confirm({
            title: 'Delete Multiple Items',
            content: 'Are you sure you want to permanently delete these items?',
            width: '300px',
            position: { X: 'center', Y: 'center' }
        });
    }
    return (<div className="App" id='dialog-target'>
            <ButtonComponent id="confirmBtn" cssClass="e-success" onClick={buttonClick.bind(this)}>Confirm</ButtonComponent>
        </div>);
}
export default App;
