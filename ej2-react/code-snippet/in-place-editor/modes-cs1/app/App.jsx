import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
class App extends React.Component {
    inplaceEditorObj;
    dropdownObj;
    modeData = ['Inline', 'Popup'];
    model = { placeholder: 'Enter some text' };
    onChange(e) {
        const mode = e.itemData.value;
        this.inplaceEditorObj.mode = mode;
        this.inplaceEditorObj.dataBind();
    }
    render() {
        return (<div id='container'>
          <table className="table-section">
          <tbody>
              <tr>
                  <td> Mode: </td>
                  <td>
                      <DropDownListComponent id='dropDown' dataSource={this.modeData} width='auto' change={this.onChange = this.onChange.bind(this)} value='Inline' placeholder='Select Mode'/>
                  </td>
              </tr>
              <tr>
                  <td className="sample-td"> Enter your name: </td>
                  <td className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='element' mode='Inline' value='Andrew' model={this.model}/>
                  </td>
                </tr>
                </tbody>
            </table>
      </div>);
    }
}
export default App;