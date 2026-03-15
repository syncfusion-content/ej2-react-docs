import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const assistRef = React.useRef(null);

    const handlePromptRequest = (args) => {
        const prompt = args.prompt;
        setTimeout(() => {

            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(`**You asked:** ${prompt}\nThis is a demonstration response from Syncfusion InlineAIAssist.`, true);
            } else {
                args.response = `**You asked:** ${prompt}\nThis is a demonstration response from Syncfusion InlineAIAssist.`;
            }
        }, 1000);
    };

    React.useEffect(() => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    }, []);

    return (
        <div>
            <div id="defaultInlineAssist" />
            <InlineAIAssistComponent
                id="inlineAiAssist"
                ref={assistRef}
                relateTo="#defaultInlineAssist"
                promptRequest={handlePromptRequest}
                popupWidth="500px"
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));