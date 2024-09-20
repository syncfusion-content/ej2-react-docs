import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import { DropDownButton } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    
    const toolbarSettings: ToolbarSettingsModel = {
        items: [ { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' } ]
    };

    const created = () => {
        new DropDownButton({
          items: [
            { text: 'हिंदी' },
            { text: 'தமிழ்' },
            { text: 'తెలుగు' }
          ],
          content: 'English',
          iconCss: 'e-icons e-translate',
          cssClass: 'custom-dropdown',
        }, '#ddMenu');
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} toolbarSettings={toolbarSettings} created={created}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));