/**
 * Rich Text Editor - Clipboard Cleanup Sample
 */
import { HtmlEditor, Image, Inject, Link, ClipBoardCleanup, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
function App() {

    return (<RichTextEditorComponent>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, ClipBoardCleanup]}/>
    </RichTextEditorComponent>);
}
export default App;
