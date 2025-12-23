import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      blockType: 'Quote',
      content: [
          {
              contentType: ContentType.Text,
              content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
          }
      ]
    }
];
  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));