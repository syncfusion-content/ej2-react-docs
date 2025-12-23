import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, CodeBlockSettingsModel } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData: BlockModel[] = [
    {
      blockType: 'Code',
      content: [
        {
          contentType: ContentType.Text,
          content: 'function greeting() {\n  console.log("Hello, world!");\n}'
        }
      ]
    }
  ];

  const codeBlockData: CodeBlockSettingsModel = {
    defaultLanguage: 'javascript',
    languages: [
      { language: 'javascript', label: 'JavaScript' },
      { language: 'typescript', label: 'TypeScript' },
      { language: 'html', label: 'HTML' },
      { language: 'css', label: 'CSS' }
    ]
  };

  return (
    <BlockEditorComponent id="block-editor" blocks={blocksData} codeBlockSettings={codeBlockData}></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));