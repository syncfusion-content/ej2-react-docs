import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
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

export default App;
ReactDOM.render(<App />, document.getElementById('container'));
