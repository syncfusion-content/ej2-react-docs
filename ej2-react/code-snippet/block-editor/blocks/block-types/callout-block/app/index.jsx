import React from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Callout',
      children: [
        {
          id: 'callout-content',
          type: 'Paragraph',
          content: [
            {
              id: 'callout-content-1',
              type: ContentType.Text,
              content:
                'Important information: This is a callout block used to highlight important content.'
            }
          ]
        }
      ]
    }
  ];

  return (
    <BlockEditorComponent
      id="blockeditor"
      blocks={blocksData}
    ></BlockEditorComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));
