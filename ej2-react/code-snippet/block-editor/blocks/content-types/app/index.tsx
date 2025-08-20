{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
    {
      type: 'Heading',
      props: { level: 2},
      content: [
        {
          type: ContentType.Text,
          content: 'Different Content Types'
        }
      ]
    },
    {
      type: 'Paragraph',
      content: [
        { type: ContentType.Text, content: 'The Block Editor supports various content types: ' },
        {
          type: ContentType.Link,
          content: 'hyperlinks',
          props: {
            url: 'https://ej2.syncfusion.com/documentation/',
            openInNewWindow: true
          }
        },
        { type: ContentType.Text, content: ', inline ' },
        { type: ContentType.Code, content: 'code snippets.' },
        { type: ContentType.Text, content: '\nUser mentions like' },
        { type: ContentType.Mention, id: 'user1' },
        { type: ContentType.Text, content: ', and labels such as' },
        { type: ContentType.Label, props: { labelId: 'label1'} },
        { type: ContentType.Text, content: '.' }
      ]
    }
  ];

  return (
    <BlockEditorComponent
      id="block-editor"
      blocks={blocksData}
      users={[{ id: 'user1', user: 'John Doe' }]}
      labelSettings={{
        labelItems: [
          { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
        ]
      }}
    />
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}