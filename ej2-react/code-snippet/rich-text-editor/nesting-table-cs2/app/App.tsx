import { HtmlEditor, Image, Inject, Table, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {

  let rteValue:string = `<table border="1" style="width:100%; border-collapse: collapse;">
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

  let toolbarSettings: object = {
    items: ['CreateTable','Blockquote', 'Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'Undo', 'Redo']
  }

  return (
    <RichTextEditorComponent height={450} value={rteValue} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, Table, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;
