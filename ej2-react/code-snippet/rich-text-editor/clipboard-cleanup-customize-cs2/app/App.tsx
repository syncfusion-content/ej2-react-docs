import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, ClipboardCleanup, ClipboardWriteEventArgs } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  const onBeforeClipboardWrite = (args: ClipboardWriteEventArgs) => {
    if (args.operation === 'copy') {
        args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
        args.plainTextContent = 'This is customized content triggered while copy event';
    }
  };

  return (
    <RichTextEditorComponent beforeClipboardWrite={onBeforeClipboardWrite}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, ClipboardCleanup, ClipboardWriteEventArgs]} />
    </RichTextEditorComponent>
  );
}

export default App;