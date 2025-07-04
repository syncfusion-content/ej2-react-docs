{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent,  } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This is a paragraph with no indentation (indent: 0)'
        }
      ],
      indent: 0
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This paragraph has one level of indentation (indent: 1)'
        }
      ],
      indent: 1
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'This paragraph has two levels of indentation (indent: 2)'
        }
      ],
      indent: 2
    },
    {
      type: 'Paragraph',
      content: [
        {
          type: 'Text',
          content: 'Back to no indentation'
        }
      ],
      indent: 0
    }
  ];

  return (
    <BlockEditorComponent id="blockEditor" blocks={blocksData} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}