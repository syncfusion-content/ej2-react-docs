import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
class App extends React.Component {
    toolbarSettings = {
        items: ['Image']
    };
    insertImageSettings = {
      saveUrl: "[SERVICE_HOSTED_PATH]/api/Home/SaveImage",
      path: "[SERVICE_HOSTED_PATH]/Uploads/"
    }

    render() {
        return (<RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} insertImageSettings={insertImageSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
