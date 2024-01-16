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
    (this.inplaceEditorObj as any).disabled = e.checked;
    this.inplaceEditorObj.dataBind();
  }

  public render() {
    return (
    <div id='container'>
        <table className="table-section">
        <tbody>
            <tr>
                <td> Disabled: </td>
                <td>
                  <CheckBoxComponent id='enable' label='Disable' checked={false} change={ this.onChange=this.onChange.bind(this) }/>
                </td>
            </tr>
            <tr>
                <td className="sample-td"> Enter your name: </td>
                <td className="sample-td">
                  <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text! }} id='disableEdit' mode='Inline' value='Andrew' model={this.model} />
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