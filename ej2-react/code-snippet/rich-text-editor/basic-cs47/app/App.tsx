/**
 * Rich Text Editor - Placeholder Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditor,RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    return (
      <RichTextEditorComponent placeholder={'Type Something'}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
}

export default App;