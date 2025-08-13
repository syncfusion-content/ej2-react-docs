{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, BlockActionMenuOpenEventArgs, BlockActionMenuCloseEventArgs, BlockActionItemClickEventArgs} from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData: BlockModel[] = [
  {
    id: 'title-block',
    type: 'Heading',
    props: { level: 1 },
    content: [
      {
        type: ContentType.Text,
        content: 'Block Action Menu Demo'
      }
    ]
  },
  {
    id: 'intro-block',
    type: 'Quote',
    content: [
      {
        type: ContentType.Text,
        content: 'Hover over any block and click the drag handle icon to see custom actions.'
      }
    ]
  }
];
  const handleMenuOpen = (args: BlockActionMenuOpenEventArgs) => {
    console.log('Menu opened for block:', args.blockId);
  };

  const handleMenuClose = (args: BlockActionMenuCloseEventArgs) => {
    console.log('Menu closed for block:', args.blockId);
  };

  const handleItemClick = (args: BlockActionItemClickEventArgs) => {
    console.log('Action clicked:', args.item.id, 'on block:', args.blockId);
    // You can add custom logic here for each action
  };

  return (
    <div>
      <div id="controls">
        <h3>Block Action Menu Configuration Demo</h3>
        <div className="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Hover over any block in the editor to see the block action menu</li>
            <li>Click on the action menu icon (⋮) next to any block</li>
            <li>Notice the custom popup size, action items and disabled tooltips</li>
          </ol>
        </div>
      </div>

      <BlockEditorComponent
        id="blockeditor"
        blocks={blocksData}
        blockActionsMenu={{
          enable: true,
          popupWidth: '180px',
          popupHeight: '110px',
          enableTooltip: false,
          items: [
            {
              id: 'highlight-action',
              label: 'Highlight Block',
              iconCss: 'e-icons e-highlight',
              tooltip: 'Highlight this block'
            },
            {
              id: 'copy-content-action',
              label: 'Copy Content',
              iconCss: 'e-icons e-copy',
              tooltip: 'Copy block content to clipboard'
            },
            {
              id: 'block-info-action',
              label: 'Block Info',
              tooltip: 'Show block information'
            }
          ],
          open: handleMenuOpen,
          close: handleMenuClose,
          itemClick: handleItemClick
        }}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}