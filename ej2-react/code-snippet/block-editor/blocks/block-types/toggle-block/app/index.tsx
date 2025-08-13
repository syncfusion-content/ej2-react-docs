{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      type: 'CollapsibleHeading',
      content: [
        {
          type: ContentType.Text,
          content: 'Collapsible Section'
        }
      ],
      props:{
      isExpanded: true,
      children: [
        {
          type: 'Paragraph',
          content: [
            {
              type: ContentType.Text,
              content: 'This content is inside a toggle section and can be collapsed.'
            }
          ]
        }
      ]
    }
    },
    {
      type: 'CollapsibleParagraph',
      content: [
        {
          type: ContentType.Text,
          content: 'Toggle paragraph section'
        }
      ],
      props:{
      isExpanded: false,
      children: [
        {
          type: 'Paragraph',
          content: [
            {
              type: ContentType.Text,
              content: 'This content is initially hidden because isExpanded is set to false.'
            }
          ]
        }
      ]
    }
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}