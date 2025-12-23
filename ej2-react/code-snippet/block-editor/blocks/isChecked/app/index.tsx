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
          content: 'Task List:'
        }
      ]
    },
    {
      blockType: 'Checklist',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Completed task (checked)'
        }
      ],
      properties: { isChecked: true}
    },
    {
      blockType: 'Checklist',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Pending task (unchecked)'
        }
      ],
      properties: { isChecked: false}
    },
    {
      blockType: 'Checklist',
      content: [
        {
          contentType: ContentType.Text,
          content: 'High priority task'
        }
      ],
      properties: { isChecked: true}
    },
    {
      blockType: 'Checklist',
      content: [
        {
          contentType: ContentType.Text,
          content: 'Low priority task'
        }
      ],
      properties: { isChecked: false}
    }
  ];

  return (
    <BlockEditorComponent id="blockeditor_tasks" blocks={blocksData}></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));