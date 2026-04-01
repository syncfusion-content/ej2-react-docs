import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    const handlePopupOpen = (args) => {
        // Your actions here when popup opens
    }

    return (
        <InlineAIAssistComponent open={handlePopupOpen} />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));