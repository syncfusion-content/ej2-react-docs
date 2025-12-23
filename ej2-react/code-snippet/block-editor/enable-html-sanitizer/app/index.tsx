import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`
                }
            ]
        }
    ];

  return (
    <BlockEditorComponent  id="blockeditor"  blocks={blocksData} enableHtmlSanitizer={true}></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));