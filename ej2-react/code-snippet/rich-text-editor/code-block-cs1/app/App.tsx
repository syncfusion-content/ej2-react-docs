import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, CodeBlock} from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
      'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'EmojiPicker', '|', 'SourceCode']
  };
  private codeBlockSettings: object = {
    languages: [
      { label: "HTML", language: "html" },
      { label: "JavaScript", language: "javascript" },
      { label: "CSS", language: "css" },
      { label: "Plain Text", language: "plaintext" }
    ],
    defaultLanguage: "plaintext"
  };
  private placeholder = 'Type something...';

  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} codeBlockSettings={this.codeBlockSettings} placeholder={this.placeholder}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, CodeBlock]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;