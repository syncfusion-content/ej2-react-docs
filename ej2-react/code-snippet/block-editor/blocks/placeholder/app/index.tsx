import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

const blocksData: BlockModel[] = [
    {
        id: 'block-1',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        placeholder: 'Start typing your notes or press "/" for commands...'
    }
];

function App() {
    return (
        <BlockEditorComponent
            id="blockeditor_sample"
            blocks={blocksData}
        ></BlockEditorComponent>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));