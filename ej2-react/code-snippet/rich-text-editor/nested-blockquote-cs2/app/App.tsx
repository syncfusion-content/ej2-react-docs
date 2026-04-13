import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {

  let rteValue:string = `<blockquote>
        <p><strong>Outer Quote:</strong> The Rich Text Editor provides a flexible way to format quotations.</p>
        <blockquote>
            <p><em>Inner Quote:</em> You can even nest blockquotes to represent quoted replies or layered citations.</p>
            <blockquote>
                <p><em>Deep Quote:</em> This is useful in forums, emails, or academic writing where multiple levels of quoting are needed.</p>
            </blockquote>
        </blockquote>
    </blockquote>`;

  let toolbarSettings: object = {
    items: ['Blockquote', 'Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'Undo', 'Redo']
  }

  return (
    <RichTextEditorComponent height={450} value={rteValue} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;
