/**
 * Rich Text Editor - MarkdownEditor KeyConfig sample
 */
import { Image, Inject, Link, MarkdownEditor, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { useEffect, useRef } from 'react';

function App() {
    let rteObj;

    let value = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`;

    let toolbarSettings = {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|', 'Undo', 'Redo']
    };
    
    function componentDidMount() {
        document.addEventListener('keyup', docKeyUp.bind(this));
    }  
    
    function docKeyUp(e) {
        if (e.altKey && e.keyCode === 84) { /* t */
            // press alt+t to focus the component.
            rteObj.current.focusIn();
        }
    }

    return (<RichTextEditorComponent ref={rteObj} created={ componentDidMount } height={450} toolbarSettings={toolbarSettings} value={value} editorMode={'Markdown'}>
        <Inject services={[Toolbar, Image, Link, MarkdownEditor]}/>
      </RichTextEditorComponent>);
}
export default App;