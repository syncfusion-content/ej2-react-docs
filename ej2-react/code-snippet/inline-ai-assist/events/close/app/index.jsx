import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    const handlePopupClose = (args) => {
        // Your actions here when popup closes
    }

    return (
        <InlineAIAssistComponent close={handlePopupClose} />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));