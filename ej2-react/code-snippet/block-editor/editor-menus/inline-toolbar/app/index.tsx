{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, ToolbarItemModel, ToolbarOpenEventArgs, ToolbarCloseEventArgs, ToolbarItemClickedEventArgs } from '@syncfusion/ej2-react-blockeditor';

function App() {
    
const customToolbarItems: ToolbarItemModel[] = [
    { id: 'clear', iconCss: 'e-icons e-format-painter', item: 'Custom', tooltip: 'Format Painter' },
    { id: 'highlight', iconCss: 'e-icons e-highlight', item: 'Custom', tooltip: 'Highlight' },
];

const blocksData: BlockModel[] = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Inline Toolbar Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        type: 'Quote',
        content: [
            {
                type: ContentType.Text,
                content: 'Select any text in the editor to open the Inline Toolbar'
            }
        ]
    }
];
    const handleOpen = (args: ToolbarOpenEventArgs) => {
        // Your actions here
    };

    const handleClose = (args: ToolbarCloseEventArgs) => {
        // Your actions here
    };

    const handleItemClicked = (args: ToolbarItemClickedEventArgs) => {
        // Handle custom actions here
    };

    return (
        <div>
            <div id="controls">
            <h3>Inline Toolbar Configuration Demo</h3>
            <div class="instructions">
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
            inlineToolbar={{
                width: '80px',
                enable: true,
                items: customToolbarItems,
                enableTooltip: true,
                open: handleOpen,
                close: handleClose,
                itemClicked: handleItemClicked
            }}
        ></BlockEditorComponent>
           </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}