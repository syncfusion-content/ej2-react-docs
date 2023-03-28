{% raw %}



import { ActionBeginEventArgs, InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public inVal: string = '2018-05-23';
  public inplaceEditorObj: InPlaceEditorComponent;
  public actionBegin(e: ActionBeginEventArgs): void {
    const value: string = (this.inplaceEditorObj.element.querySelector('#date') as any).value;
    this.inplaceEditorObj.value = value;
    (e as any).value = value;
  }
  public render() {
    return (
      <div>
        <div id='container'>
            <span className="content-title"> Select date: </span>
            <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text! }} id='datepicker' mode='Inline' template='#date' value='2018-05-23' actionBegin={ this.actionBegin = this.actionBegin.bind(this) } />
        </div>
        <div id='html-template' style={ { display: "none" } }>
            <input id="date" defaultValue= { this.inVal } type="date" />
        </div>
     </div>
    );
  }
}

export default App;


{% endraw %}