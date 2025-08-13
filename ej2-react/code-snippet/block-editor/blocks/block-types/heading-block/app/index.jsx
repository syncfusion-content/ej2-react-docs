{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Heading',
      props: { level: 1},
      content: [
        {
          type: ContentType.Text,
          content: 'Main Document Title'
        }
      ]
    },
    {
      type: 'Heading',
      props: { level: 2},
      content: [
        {
          type: ContentType.Text,
          content: 'Chapter Overview'
        }
      ]
    },
    {
      type: 'Heading',
      props: { level: 3},
      content: [
        {
          type: ContentType.Text,
          content: 'Section Introduction'
        }
      ]
    },
    {
      type: 'Heading',
      props: { level: 4},
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

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}