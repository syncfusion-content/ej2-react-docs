{% raw %}
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';
class App extends React.Component {
    inplaceEditorObj;
    checkboxObj;
    model = { placeholder: 'Enter some text' };
    onChange(e) {
        this.inplaceEditorObj.disabled = e.checked;
        this.inplaceEditorObj.dataBind();
    }
    render() {
        return (<div id='container'>
        <table className="table-section">
            <tr>
                <td> Disabled: </td>
                <td>
                  <CheckBoxComponent id='enable' label='Disable' checked={false} change={this.onChange = this.onChange.bind(this)}/>
                </td>
            </tr>
            <tr>
                <td className="sample-td"> Enter your name: </td>
                <td className="sample-td">
                  <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='disableEdit' mode='Inline' value='Andrew' model={this.model}/>
                </td>
            </tr>
        </table>
     </div>);
    }
}
export default App;
{% endraw %}