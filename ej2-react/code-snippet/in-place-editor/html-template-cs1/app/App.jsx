{% raw %}
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    inVal = '2018-05-23';
    inplaceEditorObj;
    actionBegin(e) {
        const value = this.inplaceEditorObj.element.querySelector('#date').value;
        this.inplaceEditorObj.value = value;
        e.value = value;
    }
    render() {
        return (<div>
        <div id='container'>
            <span className="content-title"> Select date: </span>
            <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='datepicker' mode='Inline' template='#date' value='2018-05-23' actionBegin={this.actionBegin = this.actionBegin.bind(this)}/>
        </div>
        <div id='html-template' style={{ display: "none" }}>
            <input id="date" defaultValue={this.inVal} type="date"/>
        </div>
     </div>);
    }
}
export default App;
{% endraw %}