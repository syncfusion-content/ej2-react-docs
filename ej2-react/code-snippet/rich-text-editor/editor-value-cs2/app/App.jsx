import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';


function App() {
    const [editorValue, setEditorValue] = useState('');
    const editorRef = useRef(null);
    const toolbarSettings = {
      items: [
        'Bold',
        'Italic',
        'Underline',
        '|',
        'Formats',
        'Alignments',
        'OrderedList',
        'UnorderedList',
        '|',
        'CreateLink',
        'Image',
        '|',
        'SourceCode',
        '|',
        'Undo',
        'Redo',
      ],
    };
  
    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.value = 'Welcome to Syncfusion RichTextEditor!';
      }
    }, []);
  
    const getEditorContent = () => {
      if (editorRef.current) {
        setEditorValue(editorRef.current.value);
      }
    };

    return ( <div className="App">
                <h1>Rich Text Editor</h1>
                <RichTextEditorComponent ref={editorRef} toolbarSettings={toolbarSettings}>
                    <Inject services={[Toolbar, HtmlEditor, Image, QuickToolbar, Link]} />
                </RichTextEditorComponent>
                <button onClick={getEditorContent}>Get Editor Value</button>
                <div>
                    <h3>Editor Value:</h3>
                    <p>{editorValue}</p>
                </div>
            </div>);
}
export default App;