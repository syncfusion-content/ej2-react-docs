import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    const value = new Date('11/23/2018');
    const model = { placeholder: 'Select date', format: 'yyyy-MM-dd' };
    return (<div id='container'>
            <span className="content-title"> Select date: </span>
            <InPlaceEditorComponent id='element' type='Date' value={value} model={model}/>
        </div>);
}
export default App;
