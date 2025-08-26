/**
 * Initilaize Rich Text Editor from React element
 */
import { HtmlEditor, Video, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let insertVideoSettings: object = {
    saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile'
  };
  return (
    <RichTextEditorComponent  insertVideoSettings={insertVideoSettings}>
        <Inject services={[Toolbar, Video, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;
