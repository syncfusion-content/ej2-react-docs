import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ActionBlur, InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

class App extends React.Component {
  public inplaceEditorObj: InPlaceEditorComponent;
  public dropdownObj: DropDownListComponent;

  public blurActionData = ['Submit', 'Cancel', 'Ignore'];
  public model = { placeholder: 'Enter some text' };

  public onChange(e: ChangeEventArgs): void {
    const editType: ActionBlur = e.itemData.value as ActionBlur;
    this.inplaceEditorObj.actionOnBlur = editType;
    this.inplaceEditorObj.dataBind();
  }

  public render() {
    return (
      <div id='container'>
          <table className="table-section">
              <tbody>
              <tr>
                  <td> ActionOnBlur: </td>
                  <td>
                      <DropDownListComponent id='dropDown' dataSource= {this.blurActionData} width='auto' value='Submit' change={ this.onChange = this.onChange.bind(this) } placeholder='Select blur action'/>
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