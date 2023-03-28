


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){
    function buttonClick() {
        DialogUtility.confirm({
        title: 'Join Chat Group',
        content: '<p>Enter your name:</p> <input type="text" name="Required" class="e-input" placeholder="Type here.." />',
        height: '250px',
        width: '300px'
        });
    }

    return (
        <div className="App" id='dialog-target'>
                <ButtonComponent id="promptBtn" isPrimary onClick={buttonClick.bind(this)}>Prompt</ButtonComponent>
        </div>
    );
}
export default App;



