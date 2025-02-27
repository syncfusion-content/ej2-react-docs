import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['CreateTable']
  }
  private quickToolbarSettings: object = {
    table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell']
  }

  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} quickToolbarSettings={this.quickToolbarSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;