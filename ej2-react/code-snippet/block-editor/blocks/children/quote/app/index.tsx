import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData: BlockModel[] = [
    {
      id: 'security-quote',
      blockType: 'Quote',
      properties:{
      children: [
            { 
                parentId: 'security-quote',
                blockType: 'Heading',
                properties: { level: 3},
                content: [{
                    contentType: ContentType.Text,
                    content: 'Security Notice'
                }]
            },
            { 
                parentId: 'security-quote',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Always validate user input before processing to prevent security vulnerabilities.'
                }]
            },
            { 
                parentId: 'security-quote',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Use HTTPS for all data transmission'
                }],
            },
            { 
                parentId: 'security-quote',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Implement proper authentication mechanisms'
                }],
            },
            { 
                parentId: 'security-quote',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Regularly update dependencies and libraries'
                }],
            }
      ]  
    }
    }
  ];

  return (
    <BlockEditorComponent id="blockEditor" blocks={blocksData}/>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));