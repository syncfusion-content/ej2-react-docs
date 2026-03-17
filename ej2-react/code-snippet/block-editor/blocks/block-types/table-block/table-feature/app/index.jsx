import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType, BlockType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'You can resize table columns by dragging column borders and can do multi-row column selection and perform deletion via popup.'
            }
        ]
    },
    {
        blockType: BlockType.Table,
        properties: {
            columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' }],
            rows: [
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 1' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 2' }] }]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 3' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 4' }] }]
                        }
                    ]
                }
            ]
        }
    }
];
  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));