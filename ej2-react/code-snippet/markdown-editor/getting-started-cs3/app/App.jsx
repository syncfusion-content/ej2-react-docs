import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  return (<RichTextEditorComponent editorMode={'Markdown'}>
    <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table ]}/>
  </RichTextEditorComponent>);
}
export default App;
