{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Heading1',
      content: [
        {
          type: 'Text',
          content: 'Custom CSS Classes in Block Editor'
        }
      ]
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'Default paragraph block'
        }
      ]
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This is an info block'
        }
      ],
      cssClass: 'info-block'
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This is a warning block'
        }
      ],
      cssClass: 'warning-block'
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This is a success block'
        }
      ],
      cssClass: 'success-block'
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This is an error block'
        }
      ],
      cssClass: 'error-block'
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
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