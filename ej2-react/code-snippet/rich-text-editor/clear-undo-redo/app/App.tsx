/**
 * Rich Text Editor - Expand Toolbar Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, Audio, Vedio } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App(){
    let rteValue: string = "<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";
    const clearUndoRedo = () => {
        const chatRTERef = React.useRef<RichTextEditorComponent | null>(null);
        const chatRTE = chatRTERef.current;
        if (chatRTE) {
        chatRTE.clearUndoRedo();
        }
    };
  return (
    <RichTextEditorComponent height={450} value={rteValue} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
     <button onClick={this.clearUndoRedo}>Clear Undo/Redo</button>
  );
}

export default App;