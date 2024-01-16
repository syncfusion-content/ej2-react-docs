{% raw %}



import { ChangeEventArgs, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

class App extends React.Component<{},{}> {
  public inplaceEditorObj: InPlaceEditorComponent;
  public checkboxObj: CheckBoxComponent;

  public model = { placeholder: 'Enter some text' };

  public onChange(e: ChangeEventArgs): void {
    (this.inplaceEditorObj as any).enableEditMode = e.checked;
    this.inplaceEditorObj.dataBind();
  }

  public render() {
    return (
    <div id='container'>
        <table className="table-section">
        <tbody>
            <tr>
                <td> EnableEditMode: </td>
                <td>
                  <CheckBoxComponent id='enable' label='Enable' checked={true} change={ this.onChange = this.onChange.bind(this) }/>
                </td>
            </tr>
            <tr>
                <td className="sample-td"> Enter your name: </td>
                <td className="sample-td">
                  <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text! }} id='dynamicEdit' mode='Inline' value='Andrew' enableEditMode={true} actionOnBlur='Ignore' model={this.model} />
                </td>
            </tr>
            </tbody>
        </table>
     </div>
    );
  }
}

export default App;


{% endraw %}