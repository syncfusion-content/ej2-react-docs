import React from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
     {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a paragraph block example.'
            }
        ]
    }
];
  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

ReactDOM.render(<App />, document.getElementById('container'));
