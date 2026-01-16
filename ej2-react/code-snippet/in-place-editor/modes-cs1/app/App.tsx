import { InPlaceEditorComponent, RenderMode } from '@syncfusion/ej2-react-inplace-editor';
import { DropDownListComponent , ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent, RenderMode } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

class App extends React.Component {
  public inplaceEditorObj: InPlaceEditorComponent;
  public dropdownObj: DropDownListComponent;

  public modeData = ['Inline', 'Popup'];
  public model = { placeholder: 'Enter some text' };

  public onChange(e: ChangeEventArgs): void {
    const mode: RenderMode = e.itemData.value as RenderMode;
    this.inplaceEditorObj.mode = mode;
    this.inplaceEditorObj.dataBind();
  }

  public render() {
    return (
      <div id='container'>
          <table className="table-section">
          <tbody>
              <tr>
                  <td> Mode: </td>
                  <td>
                      <DropDownListComponent id='dropDown' dataSource= {this.modeData} width='auto' change={ this.onChange = this.onChange.bind(this) } value='Inline' placeholder='Select Mode'/>
                  </td>
              </tr>
              <tr>
                  <td  className="sample-td"> Enter your name: </td>
                  <td  className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text! }} id='element' mode='Inline' value='Andrew' model={this.model} />
                  </td>
                </tr>
                </tbody>
            </table>
      </div>
    );
  }
}
export default App;