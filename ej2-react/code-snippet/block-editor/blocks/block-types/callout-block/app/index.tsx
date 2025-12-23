import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      blockType: 'Callout',
      properties:{
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: ContentType.Text,
              content:
                'Important information: This is a callout block used to highlight important content.'
            }
          ]
        }
      ]
    }
    }
  ];

  return (
    <BlockEditorComponent  id="blockeditor"  blocks={blocksData}></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));
