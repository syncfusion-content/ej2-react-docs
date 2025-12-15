{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      blockType: 'BulletList',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Features of the Block Editor'
        }
      ]
    },
    {
      blockType: 'NumberedList',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Step 1: Initialize the Block Editor'
        }
      ]
    },
    {
      blockType: 'Checklist',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Review documentation'
        }
      ],
      properties: { isChecked: true }
    },
    {
      blockType: 'Checklist',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Implement drag and drop functionality'
        }
      ],
      properties: { isChecked: false }
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}