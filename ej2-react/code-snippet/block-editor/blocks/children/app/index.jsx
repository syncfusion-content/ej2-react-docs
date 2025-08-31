{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent,  } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      id: 'security-callout',
      type: 'Callout',
      props:{
      children: [
        {
          id: 'security-title',
          parentId: 'security-callout',
          type: 'Heading',
          props: { level: 3},
          content: [
            {
              type: 'Text',
              content: 'Security Notice'
            }
          ]
        },
        {
          id: 'security-warning',
          parentId: 'security-callout',
          type: 'Paragraph',
          content: [
            {
              type: 'Text',
              content:
                'Always validate user input before processing to prevent security vulnerabilities.'
            }
          ]
        },
        {
          id: 'security-tips',
          parentId: 'security-callout',
          type: 'Paragraph',
          content: [
            {
              type: 'Text',
              content: 'Use HTTPS for all data transmission'
            }
          ],
          indent: 1
        },
        {
          id: 'security-tips-2',
          parentId: 'security-callout',
          type: 'Paragraph',
          content: [
            {
              type: 'Text',
              content: 'Implement proper authentication mechanisms'
            }
          ],
          indent: 1
        },
        {
          id: 'security-tips-3',
          parentId: 'security-callout',
          type: 'Paragraph',
          content: [
            {
              type: 'Text',
              content: 'Regularly update dependencies and libraries'
            }
          ],
          indent: 1
        }
      ]
    }
    }
  ];

  return (
    <BlockEditorComponent
      id="blockEditor"
      blocks={blocksData}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}