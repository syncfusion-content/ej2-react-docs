import React from 'react';
import ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Code',
      content: [
        {
          type: ContentType.Text,
          content: 'function greeting() {\n  console.log("Hello, world!");\n}'
        }
      ],
      codeSettings: {
        defaultLanguage: 'javascript',
        languages: [
          { language: 'javascript', label: 'JavaScript' },
          { language: 'typescript', label: 'TypeScript' },
          { language: 'html', label: 'HTML' },
          { language: 'css', label: 'CSS' }
        ]
      }
    }
  ];

  return (
    <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));
