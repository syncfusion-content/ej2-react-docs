import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    inplaceEditorObj;
    dropdownObj;
    positionData = ['TopLeft', 'TopCenter', 'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight', 'LeftTop', 'LeftCenter', 'LeftBottom', 'RightTop', 'RightCenter', 'RightBottom'];
    model = { placeholder: 'Enter some text' };
    popupSettings = { title: 'Enter name', model: { position: 'BottomCenter' } };
    onChange(e) {
        this.inplaceEditorObj.popupSettings.model.position = e.value;
        this.inplaceEditorObj.dataBind();
    }
    render() {
        return (<div id='container'>
          <table className="table-section">
            <tbody>
                <tr>
                  <td> Position: </td>
                  <td>
                    <DropDownListComponent id='dropDown' value='BottomCenter' dataSource={this.positionData} placeholder='Select a position' popupHeight='150px' change={this.onChange = this.onChange.bind(this)}/>
                  </td>
                </tr>
                <tr>
                    <td className="edit-heading sample-td"> Enter your name: </td>
                    <td className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='element' mode='Popup' value='Andrew' model={this.model} popupSettings={this.popupSettings}/>
                    </td>
                </tr>
              </tbody>
            </table>
      </div>);
    }
}
export default App;