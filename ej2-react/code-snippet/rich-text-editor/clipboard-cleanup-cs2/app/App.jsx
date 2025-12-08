/**
 * Rich Text Editor - Clipboard Cleanup Sample
 */
import { HtmlEditor, Image, Inject, Link, ClipboardCleanup, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
function App() {

    return (<RichTextEditorComponent>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, ClipboardCleanup]}/>
    </RichTextEditorComponent>);
}
export default App;
