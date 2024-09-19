import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);

    const promptViewTemplate = '<div class="view-container"><h5>Prompt view content</h5></div>';
    const responseViewTemplate = '<div class="view-container"><h5>Response view content</h5></div>';
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance}>
            <ViewsDirective>
                <ViewDirective type='Assist' name='Prompt' viewTemplate={promptViewTemplate}></ViewDirective>
                <ViewDirective type='Custom' name='Response' iconCss='e-icons e-comment-show' viewTemplate={responseViewTemplate}></ViewDirective>
            </ViewsDirective>
        </AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
