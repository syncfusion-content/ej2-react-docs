{% raw %}

{ /* Import the BlockEditor.*/ }
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
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
    <BlockEditorComponent  id="blockeditor"  blocks={blocksData}></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}