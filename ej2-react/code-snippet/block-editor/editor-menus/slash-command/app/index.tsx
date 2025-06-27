import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, CommandItemModel, CommandMenuOpenEventArgs, CommandMenuCloseEventArgs, CommandQueryFilteringEventArgs, CommandItemClickedEventArgs } from '@syncfusion/ej2-react-blockeditor';

const commandItems: CommandItemModel[] = [
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

const blocksData: BlockModel[] = [
    {
        id: 'demo-block',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
            }
        ]
    }
];

function App() {
    const handleItemClicked = (args: CommandItemClickedEventArgs) => {
        // Handle custom command actions
        console.log('Command clicked:', args.item); // Debug
    };

    const handleOpen = (args: CommandMenuOpenEventArgs) => {
        // Your actions here
        console.log('Command menu opened:', args); // Debug
    };

    const handleClose = (args: CommandMenuCloseEventArgs) => {
        // Your actions here
        console.log('Command menu closed:', args); // Debug
    };

    const handleQueryFiltering = (args: CommandQueryFilteringEventArgs) => {
        // Your actions here
        console.log('Query filtering:', args); // Debug
    };

    return (
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            created={() => console.log('BlockEditor initialized')} // Debug initialization
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
            style={{ border: '1px solid red' }} // Temporary styling to confirm rendering
        ></BlockEditorComponent>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));