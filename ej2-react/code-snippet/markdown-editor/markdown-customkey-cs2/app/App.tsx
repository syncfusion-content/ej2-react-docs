import {MarkdownEditor, MarkdownFormatter, IMarkdownFormatterModel, Image, Inject, Link, Table, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let rteValue:string = "In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";

  let customHTMLModel: IMarkdownFormatterModel = {
    // formatter is used to configure the custom key
    keyConfig: {
    'insert-link': 'ctrl+q', // confite the desired key
    }
  };

  const toolbarSettings: object = {
    items: [
      'Bold',
      'Italic',
      'StrikeThrough',
      'SuperScript',
      'SubScript',
      '|',
      'Formats',
      '|',
      'OrderedList',
      'UnorderedList',
      'CreateLink',
      'Image',
      'CreateTable',
      '|',
      'Undo',
      'Redo',
    ],
  }

  let formatter: any =  new MarkdownFormatter(customHTMLModel);

  return (
    <RichTextEditorComponent formatter={formatter} value={rteValue} editorMode={'Markdown'} toolbarSettings={toolbarSettings}>
      <Inject services={[Toolbar, Image, Link,Table, MarkdownEditor]} />
    </RichTextEditorComponent>
  );
}

export default App;
