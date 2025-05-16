import { HtmlEditor, Image, Inject, Link, QuickToolbar,ImageSettingsModel, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App(){
  
  let rteValue:string = `<p>The Syncfusion <strong>Rich Text Editor</strong>, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
  <li>
      <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
  </li>
  <li>
      <p>Bulleted and numbered lists.</p>
  </li>
  <li>
      <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
  </li>
  <li>
      <p>Contains undo/redo manager. </p>
  </li>
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"></div>`;

  const iframeSettings:object = {
    enable: true,
  };

  return (
    <div class="control-section">
      <div class="editor">
      <h6 class="header">With style encapsulation</h6>
        <RichTextEditorComponent height={450}  iframeSettings={iframeSettings} value={rteValue}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>
      <div class="editor">
      <h6 class="header">Without style encapsulation</h6>
        <RichTextEditorComponent height={450}  id='iframeRTE' value={rteValue}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>
    </div>
  );
}

export default App;