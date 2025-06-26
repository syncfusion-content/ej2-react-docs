import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

const customContextMenuItems = [
    {
        id: 'format-menu',
        text: 'Format',
        iconCss: 'e-icons e-format-painter',
        items: [
            {
                id: 'bold-item',
                text: 'Bold',
                iconCss: 'e-icons e-bold',
            },
            {
                id: 'italic-item',
                text: 'Italic',
                iconCss: 'e-icons e-italic',
            },
            {
                id: 'underline-item',
                text: 'Underline',
                iconCss: 'e-icons e-underline',
            }
        ]
    },
    { separator: true },
    {
        id: 'statistics-item',
        text: 'Block Statistics',
        iconCss: 'e-icons e-chart'
    },
    {
        id: 'export-item',
        text: 'Export Options',
        iconCss: 'e-icons e-export',
        items: [
            {
                id: 'export-json',
                text: 'Export as JSON',
                iconCss: 'e-icons e-file-json'
            },
            {
                id: 'export-html',
                text: 'Export as HTML',
                iconCss: 'e-icons e-file-html'
            },
            {
                id: 'export-pdf',
                text: 'Export as PDF',
                iconCss: 'e-icons e-file-pdf'
            }
        ]
    }
];

const blocksData = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [
            {
                type: 'Text',
                content: 'Context Menu Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        type: 'Quote',
        content: [
            {
                type: 'Text',
                content: 'Right-click anywhere in this editor to open the custom context menu. Try different areas and blocks.'
            }
        ]
    }
];

function App() {
    const handleBeforeOpen = (args) => {
        // Your actions here
    };

    const handleOpen = (args) => {
        // Your actions here
    };

    const handleBeforeClose = (args) => {
        // Your actions here
    };

    const handleClose = (args) => {
        // Your actions here
    };

    const handleItemClick = (args) => {
        // Handle custom actions here
    };

    return (
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            contextMenu={{
                enable: true,
                showItemOnClick: true,
                items: customContextMenuItems,
                beforeOpen: handleBeforeOpen,
                open: handleOpen,
                beforeClose: handleBeforeClose,
                close: handleClose,
                itemClick: handleItemClick
            }}
        ></BlockEditorComponent>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));