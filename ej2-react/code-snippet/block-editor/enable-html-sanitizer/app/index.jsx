{% raw %}

{ /* Import the BlockEditor.*/ }
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
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
    <BlockEditorComponent
      id="blockeditor"
      blocks={blocksData}
      enableHtmlSanitizer={true}
    ></BlockEditorComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}