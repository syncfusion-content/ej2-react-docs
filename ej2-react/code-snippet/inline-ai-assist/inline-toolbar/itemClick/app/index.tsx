import { InlineAIAssistComponent, InlineToolbarSettingsModel, ToolbarItemClickEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    const inlineToolbarSettings: InlineToolbarSettingsModel = {
        itemClick: (args: ToolbarItemClickEventArgs) => {
            // Your actions here
        }
    };

    return (
        <InlineAIAssistComponent 
            inlineToolbarSettings={inlineToolbarSettings}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));