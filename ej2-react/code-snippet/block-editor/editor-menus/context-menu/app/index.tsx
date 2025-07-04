{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, ContextMenuBeforeOpenEventArgs, ContextMenuOpenEventArgs, ContextMenuBeforeCloseEventArgs, ContextMenuCloseEventArgs, ContextMenuItemClickEventArgs, ContextMenuItemModel } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const customContextMenuItems: ContextMenuItemModel[] = [
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

const blocksData: BlockModel[] = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Context Menu Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        type: 'Quote',
        content: [
            {
                type: ContentType.Text,
                content: 'Right-click anywhere in this editor to open the custom context menu. Try different areas and blocks.'
            }
        ]
    }
];
    const handleBeforeOpen = (args: ContextMenuBeforeOpenEventArgs) => {
        // Your actions here
    };

    const handleOpen = (args: ContextMenuOpenEventArgs) => {
        // Your actions here
    };

    const handleBeforeClose = (args: ContextMenuBeforeCloseEventArgs) => {
        // Your actions here
    };

    const handleClose = (args: ContextMenuCloseEventArgs) => {
        // Your actions here
    };

    const handleItemClick = (args: ContextMenuItemClickEventArgs) => {
        // Handle custom actions here
    };

    return (
        <div>
            <div id="controls">
        <h3>Context Menu Configuration Demo</h3>
        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Right-click anywhere in the editor to open the context menu</li>
            <li>Notice the custom popup size, menu items and disabled tooltips</li>
            <li>Try clicking on items with submenus (they appear on click, not hover)</li>
          </ol>
        </div>
      </div>
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
         </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}