// {% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
  {
    id: 'block-1',
    type: 'Heading1',
    content: [
      {
        type: ContentType.Text,
        content: 'Undo/Redo Demo'
      }
    ]
  },
  {
    id: 'block-2',
    type: 'Paragraph',
    content: [
      {
        type: ContentType.Text,
        content: 'Try adding new blocks or modifying content below:'
      }
    ]
  },
  {
    id: 'block-3',
    type: 'Paragraph',
    content: [
      {
        type: ContentType.Text,
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

// {% endraw %}