import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
function App() {
    let toolbarSettings = {
        items: ['Image']
    };
    const insertImageSettings = {
      saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
      path: "[SERVICE_HOSTED_PATH]/Files/"
    }
    
    const onImageUpload=(args) =>{
        args.currentRequest.setRequestHeader('Authorization', 'Syncfusion');
    };
    return (<RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} imageUploading={onImageUpload} insertImageSettings={insertImageSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
