import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, CodeBlock } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    toolbarSettings = {
      items: ['Checklist', 'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
        'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
    };
    render() {
        return (<RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} >
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, CodeBlock]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
