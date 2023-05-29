import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<div id='container'>
        <div id='signature-control'>
            <h4>Sign here</h4>
            <SignatureComponent id='signature'/>
        </div>
        </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
