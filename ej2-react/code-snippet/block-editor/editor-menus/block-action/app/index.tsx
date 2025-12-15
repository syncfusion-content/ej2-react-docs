{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, BlockActionMenuOpeningEventArgs, BlockActionMenuClosingEventArgs, BlockActionItemSelectEventArgs} from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blocksData: BlockModel[] = [
  {
    blockType: 'Heading',
    properties: { level: 1 },
    content: [
      {
        contentType: ContentType.Text,
        content: 'Block Action Menu Demo'
      }
    ]
  },
  {
    blockType: 'Quote',
    content: [
      {
        contentType: ContentType.Text,
        content: 'Hover over any block and click the drag handle icon to see custom actions.'
      }
    ]
  }
];

// Block Action Menu Configuration
    const blockActionMenuSettings = {
        enable: true,
        popupWidth: '180px',
        popupHeight: '110px',
        enableTooltip: false,
        // Custom action items
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
        opening: (args: BlockActionMenuOpeningEventArgs) => {
            // Your actions here
        },
        closing: (args: BlockActionMenuClosingEventArgs) => {
            // Your actions here
        },
        itemSelect: (args: BlockActionItemSelectEventArgs) => {
            // Handle custom block actions
        }
    }

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
        blockActionMenuSettings={blockActionMenuSettings}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}