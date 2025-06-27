import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

const customToolbarItems = [
    { id: 'clear', iconCss: 'e-icons e-format-painter', item: 'Custom', tooltip: 'Format Painter' },
    { id: 'highlight', iconCss: 'e-icons e-highlight', item: 'Custom', tooltip: 'Highlight' },
];

const blocksData = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [
            {
                type: 'Text',
                content: 'Inline Toolbar Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        type: 'Quote',
        content: [
            {
                type: 'Text',
                content: 'Select any text in the editor to open the Inline Toolbar'
            }
        ]
    }
];

function App() {
    const handleOpen = (args) => {
        // Your actions here
    };

    const handleClose = (args) => {
        // Your actions here
    };

    const handleItemClicked = (args) => {
        // Handle custom actions here
    };

    return (
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
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));