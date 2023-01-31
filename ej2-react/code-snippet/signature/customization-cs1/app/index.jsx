import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<div id='container'>
            <div className='signature-control'>
                <h4>Sign here</h4>
                <SignatureComponent id='signature' maxStrokeWidth={3} minStrokeWidth={0.5} velocity={0.7}/>
            </div>
          </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
