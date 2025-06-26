import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.getElementById('container'));
