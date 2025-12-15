{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData = [
    {
            blockType: 'Heading',
            properties: { level: 2 },
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Different Content Types'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'The Block Editor supports various content types: '
                },
                {
                    contentType: ContentType.Link,
                    content: 'hyperlinks',
                    properties: {
                        url: 'https://ej2.syncfusion.com/documentation/',
                    }
                },
                {
                    contentType: ContentType.Text,
                    content: ', inline ',
                },
                {
                    contentType: ContentType.Text,
                    content: 'code snippets.',
                    properties: {
                        styles: { inlineCode: true },
                    }
                },
                {
                    contentType: ContentType.Text,
                    content: '\nUser mentions like'
                },
                {
                    contentType: ContentType.Mention,
                    properties: { userId: "user1" }
                },
                {
                    contentType: ContentType.Text,
                    content: ', and labels such as '
                },
                {
                    contentType: ContentType.Label,
                    properties: { labelId: 'label1' }
                },
                {
                    contentType: ContentType.Text,
                    content: '.'
                }
            ]
        }
  ];

  return (
    <BlockEditorComponent
      id="block-editor"
      blocks={blocksData}
      users={[{ id: 'user1', user: 'John Doe' }]}
      labelSettings={{
        items: [
          { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupBy: 'Status' }
        ]
      }}
    ></BlockEditorComponent>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}