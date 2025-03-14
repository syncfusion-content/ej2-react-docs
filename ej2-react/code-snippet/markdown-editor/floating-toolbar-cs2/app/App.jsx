import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let checkboxObj;
    let rteObj;
    let toolbarSettings = {
        enableFloating: false,
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
    };
    let rteValue = "In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";
    function onChange(args) {
        rteObj.toolbarSettings.enableFloating = args.checked;
        rteObj.dataBind();
    }
    return (<div>
        <CheckBoxComponent checked={false} label='Enable Floating' ref={(scope) => { checkboxObj = scope; }} change={onChange.bind(this)}/>
        <br />
        <br />
        <br />
        <RichTextEditorComponent ref={(scope) => { rteObj = scope; }} editorMode={'Markdown'} value={rteValue} height={450} toolbarSettings={toolbarSettings}>
            <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table ]}/>
        </RichTextEditorComponent>
      </div>);
}
export default App;