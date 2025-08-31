{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
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
      type: 'Checklist',
      content: [
        {
          type: ContentType.Text,
          content: 'Review documentation'
        }
      ],
      props: { isChecked: true }
    },
    {
      type: 'Checklist',
      content: [
        {
          type: ContentType.Text,
          content: 'Implement drag and drop functionality'
        }
      ],
      props: { isChecked: false }
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}