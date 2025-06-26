import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, BlockActionMenuOpenEventArgs, BlockActionMenuCloseEventArgs, BlockActionItemClickEventArgs } from '@syncfusion/ej2-react-blockeditor';

const blocksData: BlockModel[] = [
  {
    id: 'title-block',
    type: 'Heading1',
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

function App() {
  const handleMenuOpen = (args: BlockActionMenuOpenEventArgs) => {
    // Your actions here
  };

  const handleMenuClose = (args: BlockActionMenuCloseEventArgs) => {
    // Your actions here
  };

  const handleItemClick = (args: BlockActionItemClickEventArgs) => {
    // Handle custom block actions
  };

  return (
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
    ></BlockEditorComponent>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));