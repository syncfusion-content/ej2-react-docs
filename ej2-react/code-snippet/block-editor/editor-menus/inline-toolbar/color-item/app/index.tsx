import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, BlockModel, ContentType, ToolbarItemClickEventArgs, TransformItemSelectEventArgs } from '@syncfusion/ej2-react-blockeditor';

function App() {
    
const customToolbarItems = [ 'Color', 'Backgroundcolor' ];

const blocksData: BlockModel[] = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Inline Toolbar Demo'
            }
        ]
    },
    {
        blockType: 'Quote',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Select any text in the editor to open the Inline Toolbar'
            }
        ]
    }
];

const inlineToolbarSettings = {
        popupWidth: 'auto',
        enable: true,
        items: customToolbarItems,
        itemClick: (args: ToolbarItemClickEventArgs) => {
            // Handle custom actions here
        }
    }

const fontColorSettings = {
    mode: 'Picker',
    modeSwitcher: true
}

const backgroundColorSettings = {
    // Handle props here
}

    return (
        <div>
            <div id="controls">
            <h3>Inline Toolbar Configuration Demo</h3>
            <div className="instructions">
                <p><strong>Instructions:</strong></p>
                <ol>
                    <li>Select any text in the editor to open the Inline Toolbar</li>
                    <li>Notice the custom popup size, toolbar items and enabled tooltips</li>
                </ol>
            </div>
        </div>
     
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            inlineToolbarSettings={inlineToolbarSettings}
            fontColorSettings={fontColorSettings}
            backgroundColorSettings={backgroundColorSettings}
        ></BlockEditorComponent>
           </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));
