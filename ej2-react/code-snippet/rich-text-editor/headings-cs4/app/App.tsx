import { HtmlEditor, Image, Inject, Link, QuickToolbar, FormatModel, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let rteValue:string = "<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";
    
  let tools: object = {
    items: ['Formats']
  };

  const customFormats: FormatModel = {
    types: [
      { text: 'Paragraph', value: 'P' },
      { text: 'Heading 1', value: 'H1' },
      { text: 'Heading 2', value: 'H2' },
      { text: 'Heading 3', value: 'H3' },
      { text: 'Heading 4', value: 'H4' },
      { text: 'Heading 5', value: 'H5' },
      { text: 'Heading 6', value: 'H6' },
      { text: 'Preformatted', value: 'Pre' },
    ],
  };

  return (
    <RichTextEditorComponent format={customFormats} height={450} value={rteValue} toolbarSettings={tools}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}
export default App;
