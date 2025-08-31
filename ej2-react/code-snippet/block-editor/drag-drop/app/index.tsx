{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData: BlockModel[] = [
  {
    id: 'block-1',
    type: 'Heading',
    props: { level: 1 },
    content: [
      {
        type: ContentType.Text,
        content: 'Drag and Drop Demo'
      }
    ]
  },
  {
    id: 'block-2',
    type: 'Paragraph',
    content: [
      {
        type: ContentType.Text,
        content: 'Try rearranging blocks by dragging the handle that appears when hovering over them. You can drag a single block or select multiple blocks to drag them together.'
      }
    ]
  },
  {
    id: 'block-3',
    type: 'BulletList',
    content: [
      {
        type: ContentType.Text,
        content: 'Drag and drop is enabled by default'
      }
    ]
  },
  {
    id: 'block-4',
    type: 'NumberedList',
    content: [
      {
        type: ContentType.Text,
        content: 'You can select multiple blocks and drag them together'
      }
    ]
  },
  {
    id: 'block-5',
    type: 'NumberedList',
    content: [
      {
        type: ContentType.Text,
        content: 'Try dragging this block to rearrange the content'
      }
    ]
  }
];
  return (
    <div id="container">
      <BlockEditorComponent
        id="blockeditor"
        blocks={blocksData}
        enableDragAndDrop={true}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}