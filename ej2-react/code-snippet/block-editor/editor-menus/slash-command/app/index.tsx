import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, CommandFilteringEventArgs, CommandItemSelectEventArgs, CommandMenuSettingsModel } from '@syncfusion/ej2-react-blockeditor';

function App() {
    // Slash Command Menu Configuration
    const commandMenuSettings: CommandMenuSettingsModel = {
        popupWidth: '350px',
        popupHeight: '400px',
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: 'Divider',
                groupBy: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupBy: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemSelect: (args: CommandItemSelectEventArgs) => {
            // Handle custom command actions
        },
        filtering: (args: CommandFilteringEventArgs) => {
            // Your actions here
        }
    }

    const blocksData: BlockModel[] = [
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
    ];

    return (
        <div>
            <div id="controls">
                <h3>Slash Command Menu Configuration Demo</h3>
                <div className="instructions">
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
                commandMenuSettings={commandMenuSettings}
            ></BlockEditorComponent>
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));