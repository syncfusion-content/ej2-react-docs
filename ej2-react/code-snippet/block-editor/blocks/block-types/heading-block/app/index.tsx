import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      type: 'Heading1',
      content: [
        {
          type: ContentType.Text,
          content: 'Main Document Title'
        }
      ]
    },
    {
      type: 'Heading2',
      content: [
        {
          type: ContentType.Text,
          content: 'Chapter Overview'
        }
      ]
    },
    {
      type: 'Heading3',
      content: [
        {
          type: ContentType.Text,
          content: 'Section Introduction'
        }
      ]
    },
    {
      type: 'Heading4',
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
