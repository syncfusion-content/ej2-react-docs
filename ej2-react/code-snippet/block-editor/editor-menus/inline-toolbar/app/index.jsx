{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    
const customToolbarItems = [ 'Bold', 'Italic' ];

const blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Inline Toolbar Demo'
            }
        ]
    },
    {
        blockType: 'Quote',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Select any text in the editor to open the Inline Toolbar'
            }
        ]
    }
];

const inlineToolbarSettings = {
        popupWidth: '100px',
        enable: true,
        items: customToolbarItems,
        itemClick: (args) => {
            // Handle custom actions here
        }
    }


    return (
        <div>
             <div id="controls">
            <h3>Inline Toolbar Configuration Demo</h3>
            <div className="instructions">
                <p><strong>Instructions:</strong></p>
                <ol>
                    <li>Select any text in the editor to open the Inline Toolbar</li>
                    <li>Notice the custom popup size, toolbar items and enabled tooltips</li>
                </ol>
            </div>
        </div>
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            inlineToolbarSettings={inlineToolbarSettings}
        ></BlockEditorComponent>
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}