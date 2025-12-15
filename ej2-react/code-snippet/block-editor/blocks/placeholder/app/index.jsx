{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const blocksData = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        properties: { placeholder: 'Start typing your notes or press "/" for commands...'},
        content: [ { contentType: ContentType.Text, content: '' } ]
    }
];
    return (
        <BlockEditorComponent
            id="blockeditor_sample"
            blocks={blocksData}
        ></BlockEditorComponent>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}