{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

const blocksData = [
    {
        id: 'demo-block',
        type: 'Paragraph',
        content: [
            {
                type: 'Text',
                content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
            }
        ]
    }
];

const commandItems = [
    {
        id: 'line-cmd',
        type: 'Divider',
        groupHeader: 'Utility',
        label: 'Insert a Line',
        iconCss: 'e-icons e-divider',
    },
    {
        id: 'timestamp-cmd',
        groupHeader: 'Actions',
        label: 'Insert Timestamp',
        iconCss: 'e-icons e-schedule',
    }
];

function App() {
    const handleItemClicked = (args) => {
        // Handle custom command actions
        console.log('Command clicked:', args.item); // Debug
    };

    const handleOpen = (args) => {
        // Your actions here
        console.log('Command menu opened:', args); // Debug
    };

    const handleClose = (args) => {
        // Your actions here
        console.log('Command menu closed:', args); // Debug
    };

    const handleQueryFiltering = (args) => {
        // Your actions here
        console.log('Query filtering:', args); // Debug
    };

    return (
        <div>
            <div id="controls">
        <h3>Slash Command Menu Configuration Demo</h3>
        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>
              Click in the editor below and type "/" to open the slash command
              menu
            </li>
            <li>Notice the custom popup size, commands and disabled tooltips</li>
          </ol>
        </div>
      </div>
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            commandMenu={{
                popupWidth: '350px',
                popupHeight: '400px',
                enableTooltip: false,
                commands: commandItems,
                itemClicked: handleItemClicked,
                open: handleOpen,
                close: handleClose,
                queryFiltering: handleQueryFiltering
            }}
        ></BlockEditorComponent>
         </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}