{% raw %}

// Import React and ReactDOM
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
   
  const blocksData = [
    {
      id: 'block-1',
      type: 'Heading',
      props: { level: 1 },
      content: [{ type: ContentType.Text, content: 'Sample Heading' }]
    },
    {
      id: 'block-2',
      type: 'Paragraph',
      content: [{ type: ContentType.Text, content: 'This is a sample paragraph block.' }]
    },
    {
      id: 'block-3',
      type: 'Paragraph'
    }
  ];

  return (
      <BlockEditorComponent id="blockeditor_rtl" blocks={blocksData} enableRtl={true}></BlockEditorComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}