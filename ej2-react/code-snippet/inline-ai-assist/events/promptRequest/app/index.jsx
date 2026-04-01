import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    const handlePromptRequest = (args) => {
        // Your actions here
    }

    return (
        <InlineAIAssistComponent promptRequest={handlePromptRequest} />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));