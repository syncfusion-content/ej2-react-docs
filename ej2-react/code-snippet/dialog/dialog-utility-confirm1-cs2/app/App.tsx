

import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";

function App() {
    function buttonClick(): void {
      DialogUtility.confirm({
        animationSettings: { effect: 'Zoom' },
        cancelButton: {  text: 'Cancel', click: cancelClick.bind(this) },
        closeOnEscape: true,
        content: "This is a Confirmation Dialog!",
        okButton: {  text: 'OK', click: okClick.bind(this) },
        showCloseIcon: true,
        title: ' Confirmation Dialog',
      });
    }
  
    function okClick(): void {
      alert('you clicked OK button');
    }
  
    function cancelClick(): void {
      alert('you clicked Cancel button');
    }

    return (
      <button className="e-control e-btn" onClick={buttonClick.bind(this)} id="targetButton" role="button">Open Confirm Dialog</button>
    );
}

export default App;



