import { HtmlEditor, Image, Inject, Link, NodeSelection, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App(){
  let rteValue:string = "<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";
    
  let rteObj: RichTextEditorComponent;
  function onclick() {
      const element: Element= (rteObj as any).contentModule.getDocument().getElementById("key");
      const selectioncursor: NodeSelection = new NodeSelection();
      const range: Range = document.createRange();
      range.setStart(element, 1); // to set the range
      selectioncursor.setRange(document, range); // to set the cursor
  }

  return (
    <div>
    <RichTextEditorComponent value={rteValue} ref={(richtexteditor) => { rteObj = richtexteditor! }}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
    <button id='btn' className="e-control e-btn" onClick={onclick.bind(this)}> Set cursor position</button>
    </div>
  );
}

export default App;