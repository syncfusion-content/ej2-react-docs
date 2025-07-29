import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
class App extends React.Component {
    toolbarSettings = {
        items: ['Image']
    };
    insertImageSettings = {
      saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
      path: "[SERVICE_HOSTED_PATH]/Files/"
    }
    
    onImageUpload(args) {
        let accessToken = "Authorization_token";
        // adding custom form Data
        args.customFormData = [ { 'Authorization': accessToken}];
    };
    render() {
        return (<RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} imageUploading={this.onImageUpload} insertImageSettings={insertImageSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
