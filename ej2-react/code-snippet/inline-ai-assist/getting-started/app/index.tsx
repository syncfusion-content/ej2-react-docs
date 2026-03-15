import { InlineAIAssistComponent, InlinePromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.FC = () => {
    const assistRef = React.useRef<any>(null);
    const listenerAdded = React.useRef(false);

    const handlePromptRequest = (args: InlinePromptRequestEventArgs) => {
        const prompt = args.prompt;
        setTimeout(() => {
            const sampleResponse = `**You asked:** ${prompt}\nThis is a demonstration response from Syncfusion InlineAIAssist.`;
            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(sampleResponse, true);
            } else {
                args.response = sampleResponse;
            }
        }, 1000);
    };

    if (!listenerAdded.current) {
        const modeSelect = document.getElementById('responseMode');
        if (modeSelect) {
            modeSelect.addEventListener('change', function (this: HTMLSelectElement) {
                if (assistRef.current) {
                    assistRef.current.responseMode = this.value;
                    assistRef.current.showPopup();
                }
            });
        }
        listenerAdded.current = true;
    }

    return (
        <div>
            <input id="search" placeholder="Type..." style={{ width: 320, marginRight: 8 }} />
            <InlineAIAssistComponent
                id="inlineAiAssist"
                ref={assistRef}
                promptRequest={handlePromptRequest}
                popupWidth="500px"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));