{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      type: 'BulletList',
      content: [
        {
          type: ContentType.Text,
          content: 'Features of the Block Editor'
        }
      ]
    },
    {
      type: 'NumberedList',
      content: [
        {
          type: ContentType.Text,
          content: 'Step 1: Initialize the Block Editor'
        }
      ]
    },
    {
      type: 'CheckList',
      content: [
        {
          type: ContentType.Text,
          content: 'Review documentation'
        }
      ],
      isChecked: true
    },
    {
      type: 'CheckList',
      content: [
        {
          type: ContentType.Text,
          content: 'Implement drag and drop functionality'
        }
      ],
      isChecked: false
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}