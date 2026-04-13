import { HtmlEditor, Image, Inject, Link, Table, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
class App extends React.Component {

    rteValue = `<table border="1" style="width:100%; border-collapse: collapse;">
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
    </table>`;

    toolbarSettings = {
       items: ['CreateTable','Bold', 'Italic', 'Underline', 'StrikeThrough', 'Blockquote', 
            'FontName', 'FontSize',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'Undo', 'Redo']
    };
    render() {
        return (
          <RichTextEditorComponent height={450} value={this.rteValue} toolbarSettings={this.toolbarSettings}>
               <Inject services={[Toolbar, Image, Link, HtmlEditor, Table, QuickToolbar]}/>
        </RichTextEditorComponent>);
    }
}
export default App;
