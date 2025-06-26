import React from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
    {
        type: 'Quote',
        content: [
            {
                type: ContentType.Text,
                content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
            }
        ]
    }
];
  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

ReactDOM.render(<App />, document.getElementById('container'));
