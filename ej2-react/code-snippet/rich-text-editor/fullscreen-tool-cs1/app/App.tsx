import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
     items: ['FullScreen']
}
public render() {
  return (
    <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings}>
       <p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>
       <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>
  );
}
}

export default App;