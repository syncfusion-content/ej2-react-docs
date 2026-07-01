import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, ContextMenuOpeningEventArgs, ContextMenuClosingEventArgs, ContextMenuItemSelectEventArgs, ContextMenuItemModel } from '@syncfusion/ej2-react-blockeditor';

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

const contextMenuSettings =  {
        enable: true,
        showItemOnClick: true,
        items: customContextMenuItems,
        opening: (args: ContextMenuOpeningEventArgs) => {
            // Your actions here
        },
        closing: (args: ContextMenuClosingEventArgs) => {
            // Your actions here
        },
        itemSelect: (args: ContextMenuItemSelectEventArgs) => {
            // Handle custom actions here
        }
    }

const blocksData: BlockModel[] = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Context Menu'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a sample text with a '
            },
            {
                contentType: ContentType.Link,
                content: 'link',
                url: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started',
                title: 'Block Editor Documentation'
            },
            {
                contentType: ContentType.Text,
                content: '. Right-click the link to see link context menu options.'
            }
        ]
    },
    {
        blockType: 'Quote',
        properties: {
            children: [
                {
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
                            content: 'When the cursor is focused on a link, right-click to open the context menu with options like Open Link, Edit Link, Copy Link, and Remove Link.'
                        }
                    ]
                }
            ]
        }
    },
    {
        blockType: 'Table',
        properties: {
            columns: [
                { id: 'col1', headerText: 'Column 1' },
                { id: 'col2', headerText: 'Column 2' }
            ],
            rows: [
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [
                                {
                                    blockType: 'Paragraph',
                                    content: [
                                        {
                                            contentType: ContentType.Text,
                                            content: 'Cell 1'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            columnId: 'col2',
                            blocks: [
                                {
                                    blockType: 'Paragraph',
                                    content: [
                                        {
                                            contentType: ContentType.Text,
                                            content: 'Cell 2'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [
                                {
                                    blockType: 'Paragraph',
                                    content: [
                                        {
                                            contentType: ContentType.Text,
                                            content: 'Cell 3'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            columnId: 'col2',
                            blocks: [
                                {
                                    blockType: 'Paragraph',
                                    content: [
                                        {
                                            contentType: ContentType.Text,
                                            content: 'Cell 4'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        blockType: 'Quote',
        properties: {
            children: [
                {
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
                            content: 'Right-click inside a table cell to open the context menu, where you can access options such as inserting or deleting rows/columns and formatting the table.'
                        }
                    ]
                }
            ]
        }
    }
];


    return (
        <div>
            <div id="controls">
        <h3>Context Menu Configuration Demo</h3>
        <div className="instructions">
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
            contextMenuSettings={contextMenuSettings}
        ></BlockEditorComponent>
         </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));