


import { HtmlEditor, Image, Inject, Link, NodeSelection, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';

function App(){
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
    <RichTextEditorComponent ref={(richtexteditor) => { rteObj = richtexteditor! }}>
      <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
      <p id="key"><b>Key features:</b></p>
      <ul>
        <li>
          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
        </li>
      </ul>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
    <button id='btn' className="e-control e-btn" onClick={onclick= onclick.bind(this)}> Set cursor position</button>
    </div>
  );
}

export default App;



