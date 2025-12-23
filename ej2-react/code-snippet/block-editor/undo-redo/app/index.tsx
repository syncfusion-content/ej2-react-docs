import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  
const blocksData: BlockModel[] = [
  {
    blockType: 'Heading',
    properties: { level: 1 },
    content: [
      {
        contentType: ContentType.Text,
        content: 'Undo/Redo Demo'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: ContentType.Text,
        content: 'Try adding new blocks or modifying content below:'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: ContentType.Text,
        content: '1. Undo stack set to maximum 40 actions\n2. Press Ctrl+Z to undo\n3. Press Ctrl+Y to redo\n4. Actions include text edits, block moves, additions, deletions'
      }
    ]
  }
];
  return (

      <BlockEditorComponent
        id="blockeditor_undo"
        blocks={blocksData}
        undoRedoStack={20}
      ></BlockEditorComponent>

  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));