

import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";

function App() {
    function buttonClick(): void {
      DialogUtility.confirm('This is a Confirmation Dialog!');
    }

    return (
      <button className="e-control e-btn" onClick={buttonClick.bind(this)} id="targetButton" role="button">Open Confirm Dialog</button>
    );
}

export default App;



