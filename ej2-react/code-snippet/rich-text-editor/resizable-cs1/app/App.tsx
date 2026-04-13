/**
 * Rich Text Editor - Resizable Sample
 */
import { HtmlEditor, Image, Inject, Link, Resize, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private rteValue:string = `<p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
                            Users can format their content using standard toolbar commands.</p>`;
  public resize: boolean = true;
  public render() {
    return (
      <RichTextEditorComponent enableResize={this.resize} value={this.rteValue}>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, Resize, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;