import { HtmlEditor, Image, Inject, Link, QuickToolbar, UploadingEventArgs, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Image']
  }

  private insertImageSettings: object = {
     saveUrl: "[SERVICE_HOSTED_PATH]/api/Home/SaveImage",
     path: "[SERVICE_HOSTED_PATH]/Uploads/"
  }

  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} insertImageSettings={this.insertImageSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;



