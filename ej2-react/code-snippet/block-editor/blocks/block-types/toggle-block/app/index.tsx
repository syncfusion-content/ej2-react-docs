{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      blockType: 'CollapsibleHeading',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Collapsible Section'
        }
      ],
      properties:{
        level: 1,
        isExpanded: true,
        children: [
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: ContentType.Text,
                content: 'This content is inside a toggle section and can be collapsed.'
              }
            ]
          }
        ]
    }
    },
    {
      blockType: 'CollapsibleParagraph',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Toggle paragraph section'
        }
      ],
      properties:{
      isExpanded: false,
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: ContentType.Text,
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