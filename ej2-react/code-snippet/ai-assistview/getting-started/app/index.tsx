import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView"></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));