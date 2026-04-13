import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, CodeBlock} from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Checklist', 'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
      'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
  };
  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, CodeBlock]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;