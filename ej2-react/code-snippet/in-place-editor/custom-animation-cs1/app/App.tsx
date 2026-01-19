import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

class App extends React.Component<{},{}> {
  public inplaceEditorObj: InPlaceEditorComponent;
  public dropdownObj: DropDownListComponent;

  public openAnimateData = ['None', 'FadeIn', 'FadeZoomIn', 'ZoomIn'];
  public model = { placeholder: 'Enter some text' };
  public popupSettings = { model: { animation: { open: { effect: 'ZoomIn', duration: 1000, delay: 0 } } } };

  public onChange(e: ChangeEventArgs): void {
    (this.inplaceEditorObj as any).popupSettings.model.animation.open.effect = e.value;
    this.inplaceEditorObj.dataBind();
  }

  public render() {
    return (
    <div id='container'>
        <table className="table-section">
          <tbody>
            <tr>
                <td> Open Animation: </td>
                <td>
                  <DropDownListComponent id='openDropDown' value='ZoomIn' dataSource= {this.openAnimateData} placeholder='Select a animate type' popupHeight='150px' change={ this.onChange=this.onChange.bind(this) } />
                </td>
            </tr>
            <tr>
                <td  className="sample-td"> Enter your name: </td>
                <td  className="sample-td">
                  <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text! }} id='element' mode='Popup' value='Andrew' model={this.model} popupSettings={this.popupSettings} />
                </td>
            </tr>
          </tbody>
        </table>
     </div>
    );
  }
}

export default App;