{% raw %}
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    let inVal = '2018-05-23';
    let inplaceEditorObj;
    function actionBegin(e) {
        const value = inplaceEditorObj.element.querySelector('#date').value;
        inplaceEditorObj.value = value;
        e.value = value;
    }
    return (<div>
        <div id='container'>
            <span className="content-title"> Select date: </span>
            <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text; }} id='datepicker' mode='Inline' template='#date' value='2018-05-23' actionBegin={actionBegin = actionBegin.bind(this)}/>
        </div>
        <div id='html-template' style={{ display: "none" }}>
            <input id="date" defaultValue={inVal} type="date"/>
        </div>
     </div>);
}
export default App;
{% endraw %}