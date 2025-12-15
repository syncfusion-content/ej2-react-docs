{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData: BlockModel[] = [
    {
      blockType: 'Heading',
      properties: { level: 1},
      content: [
        {
          contentType: ContentType.Text,
          content: 'Custom CSS Classes in Block Editor'
        }
      ]
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Default paragraph block'
        }
      ]
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This is an info block'
        }
      ],
      cssClass: 'info-block'
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This is a warning block'
        }
      ],
      cssClass: 'warning-block'
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This is a success block'
        }
      ],
      cssClass: 'success-block'
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This is an error block'
        }
      ],
      cssClass: 'error-block'
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This is a custom font block'
        }
      ],
      cssClass: 'custom-font'
    }
  ];

  return (
    <BlockEditorComponent id="blockEditor" blocks={blocksData} />
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}