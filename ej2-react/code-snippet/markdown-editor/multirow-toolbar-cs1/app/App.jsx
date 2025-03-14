import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    rteValue = "In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";
    toolbarSettings = {
        items: [
            'Bold',
            'Italic',
            'StrikeThrough',
            'InlineCode',
            'SuperScript',
            'SubScript',
            '|',
            'Formats',
            'Blockquote',
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
        type: 'Multirow'
    };
    render() {
        return (<RichTextEditorComponent editorMode={'Markdown'} value={this.rteValue} toolbarSettings={this.toolbarSettings}>
        <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table]} />
      </RichTextEditorComponent>);
    }
}
export default App;