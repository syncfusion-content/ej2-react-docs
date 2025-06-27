import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
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

export default App;
ReactDOM.render(<App />, document.getElementById('container'));
