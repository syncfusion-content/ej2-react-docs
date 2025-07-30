import { HtmlEditor, Image, Inject, Link, QuickToolbar,UploadingEventArgs, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let toolbarSettings: object = {
    items: ['Image']
  }

  const insertImageSettings: object = {
    saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
    path: "[SERVICE_HOSTED_PATH]/Files/"
  }
  
  const onImageUpload=(args: UploadingEventArgs) =>{
      let accessToken = "Authorization_token";
      // adding custom form Data
      args.customFormData = [ { 'Authorization': accessToken}];
  };
  
  return (
    <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} imageUploading={onImageUpload} insertImageSettings={insertImageSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;