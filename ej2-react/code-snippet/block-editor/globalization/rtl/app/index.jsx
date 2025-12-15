{% raw %}

// Import React and ReactDOM
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
   
  const blocksData = [
    {
      blockType: 'Heading',
      properties: { level: 1 },
      content: [{ contentType: ContentType.Text, content: 'Sample Heading' }]
    },
    {
      blockType: 'Paragraph',
      content: [{ contentType: ContentType.Text, content: 'This is a sample paragraph block.' }]
    },
    {
      blockType: 'Paragraph'
    }
  ];

  return (
      <BlockEditorComponent id="blockeditor_rtl" blocks={blocksData} enableRtl={true}></BlockEditorComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}