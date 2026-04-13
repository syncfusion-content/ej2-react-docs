/**
 * Rich Text Editor - File Browser Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, FileManager } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App(){
  let rteValue: string = "<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";
  let fileManagerSettings: object = {
    enable: true,
    path: '/Pictures/Food',
    ajaxSettings: {
      url: 'https://ej2-aspcore-service.azurewebsites.net/FileManager/FileOperations',
      getImageUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
      uploadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
      downloadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download'
    }
  }

  let toolbarSettings: object = {
    items: ['FileManager']
  }

  return (
    <RichTextEditorComponent value={rteValue} fileManagerSettings={fileManagerSettings} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, FileManager]} />
    </RichTextEditorComponent>
  );
}

export default App;