import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import { OpenEventArgs } from '@syncfusion/ej2-popups';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    const handlePopupOpen = (args: OpenEventArgs) => {
        // Your actions here when popup opens
    }

    return (
        <InlineAIAssistComponent open={handlePopupOpen} />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));