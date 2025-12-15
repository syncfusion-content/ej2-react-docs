{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This section discusses the features of the Block Editor.'
        }
      ]
    },
    {
      blockType: 'Divider'
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'This section covers implementation details and usage examples.'
        }
      ]
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}