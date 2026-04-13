import { HtmlEditor, Image, Inject, Link, QuickToolbar, Table, RichTextEditorComponent, Toolbar, QuickToolbarSettingsModel } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {

  private rteValue: string = `<table border="1" style="width:100%; border-collapse: collapse;">
      <tr>
        <th>Department</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Sales</td>
        <td>
          <table border="1" style="width:100%; border-collapse: collapse;">
            <tr>
              <th>Employee</th>
              <th>Target</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$60,000</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>Marketing</td>
        <td>Campaign planning in progress</td>
      </tr>
    </table>`
  private toolbarSettings: object = {
    items: ['CreateTable']
  }
  private quickToolbarSettings: QuickToolbarSettingsModel = {
    table: ['TableCellProperties']
  }
  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rteValue} toolbarSettings={this.toolbarSettings} quickToolbarSettings={this.quickToolbarSettings} width='250px'>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, Table, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;