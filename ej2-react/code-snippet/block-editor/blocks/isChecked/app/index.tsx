{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

const blocksData: BlockModel[] = [
  {
    id: 'block-1',
    type: 'Paragraph',
    content: [
      {
        type: ContentType.Text,
        content: 'Task List:'
      }
    ]
  },
  {
    id: 'block-2',
    type: 'Checklist',
    content: [
      {
        type: ContentType.Text,
        content: 'Completed task (checked)'
      }
    ],
    props: { isChecked: true}
  },
  {
    id: 'block-3',
    type: 'Checklist',
    content: [
      {
        type: ContentType.Text,
        content: 'Pending task (unchecked)'
      }
    ],
    props: { isChecked: false}
  },
  {
    id: 'block-4',
    type: 'Checklist',
    content: [
      {
        type: ContentType.Text,
        content: 'High priority task'
      }
    ],
    props: { isChecked: true}
  },
  {
    id: 'block-5',
    type: 'Checklist',
    content: [
      {
        type: ContentType.Text,
        content: 'Low priority task'
      }
    ],
    props: { isChecked: false}
  }
];

function App() {
  return (
    <BlockEditorComponent
      id="blockeditor_tasks"
      blocks={blocksData}
    ></BlockEditorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}