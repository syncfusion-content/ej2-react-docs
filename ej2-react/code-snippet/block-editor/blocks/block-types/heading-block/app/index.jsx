import React from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Heading1',
      content: [
        {
          type: ContentType.Text,
          content: 'Main Document Title'
        }
      ]
    },
    {
      type: 'Heading2',
      content: [
        {
          type: ContentType.Text,
          content: 'Chapter Overview'
        }
      ]
    },
    {
      type: 'Heading3',
      content: [
        {
          type: ContentType.Text,
          content: 'Section Introduction'
        }
      ]
    },
    {
      type: 'Heading4',
      content: [
        {
          type: ContentType.Text,
          content: 'Sub-section Details'
        }
      ]
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

ReactDOM.render(<App />, document.getElementById('container'));
