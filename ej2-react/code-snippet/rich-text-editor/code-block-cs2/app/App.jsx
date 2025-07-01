import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, CodeBlock} from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let toolbarSettings = {
    items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
      'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'EmojiPicker', '|', 'SourceCode']
  };
  let codeBlockSettings = {
    languages: [
      { label: "HTML", language: "html" },
      { label: "JavaScript", language: "javascript" },
      { label: "CSS", language: "css" },
      { label: "Plain Text", language: "plaintext" }
    ],
    defaultLanguage: "plaintext"
  };
  let placeholder = 'Type something...';
  return (<RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} codeBlockSettings={codeBlockSettings} placeholder={placeholder}>
    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, CodeBlock]} />
  </RichTextEditorComponent>);
}
export default App;
