import { HtmlEditor, Image, Inject, Link, QuickToolbar,UploadingEventArgs, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let toolbarSettings: object = {
    items: ['Image']
  }

  const insertImageSettings: object = {
    saveUrl: "[SERVICE_HOSTED_PATH]/api/Home/SaveImage",
    path: "[SERVICE_HOSTED_PATH]/Uploads/"
  }
  
  return (
    <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} insertImageSettings={insertImageSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;