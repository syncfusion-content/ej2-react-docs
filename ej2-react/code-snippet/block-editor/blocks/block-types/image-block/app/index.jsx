import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      blockType: 'Image',
      properties: {
        src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
        altText: 'Sample image'
      }
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content:
            'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
        }
      ]
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));