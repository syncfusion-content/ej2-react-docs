import React from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Image',
      imageSettings: {
        src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
        altText: 'Sample image'
      }
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: ContentType.Text,
          content:
            'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
        }
      ]
    }
  ];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

ReactDOM.render(<App />, document.getElementById('container'));
