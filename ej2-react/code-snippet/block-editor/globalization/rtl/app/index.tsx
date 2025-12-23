import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
// Initial blocks data
const blocksData: BlockModel[] = [
  {
    blockType: 'Heading',
    properties: { level: 1 },
    content: [
      {
        contentType: ContentType.Text,
        content: 'Sample Heading'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: ContentType.Text,
        content: 'This is a sample paragraph block.'
      }
    ]
  },
  {
    blockType: 'Paragraph'
  }
];
  return (
      <BlockEditorComponent id="blockeditor_locali" enableRtl={true} blocks={blocksData} ></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));