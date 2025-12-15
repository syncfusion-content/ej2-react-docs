{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      blockType: 'Heading',
      properties: { level: 1},
      content: [
        {
          contentType: ContentType.Text,
          content: 'Main Document Title'
        }
      ]
    },
    {
      blockType: 'Heading',
      properties: { level: 2},
      content: [
        {
          contentType: ContentType.Text,
          content: 'Chapter Overview'
        }
      ]
    },
    {
      blockType: 'Heading',
      properties: { level: 3},
      content: [
        {
          contentType: ContentType.Text,
          content: 'Section Introduction'
        }
      ]
    },
    {
      blockType: 'Heading',
      properties: { level: 4},
      content: [
        {
          contentType: ContentType.Text,
          content: 'Sub-section Details'
        }
      ]
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}