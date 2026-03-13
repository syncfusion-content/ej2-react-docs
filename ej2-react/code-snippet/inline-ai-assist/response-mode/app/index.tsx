import { InlineAIAssistComponent, InlinePromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.FC = () => {
    const assistRef = React.useRef<any>(null);
    const listenerAdded = React.useRef(false);

    const handlePromptRequest = (args: InlinePromptRequestEventArgs) => {
        const prompt = args.prompt;
        setTimeout(() => {
            args.response = `**You asked:** ${prompt}\nThis is a demonstration response from Syncfusion InlineAIAssist.`;
        }, 1000);
    };

    React.useEffect(() => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }

        if (!listenerAdded.current) {
            const modeSelect = document.getElementById('responseMode') as HTMLSelectElement | null;
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
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <label htmlFor="responseMode">Response mode: </label>
            <select id="responseMode" defaultValue="Popup" style={{ marginRight: 12 }}>
                <option value="Inline">Inline</option>
                <option value="Popup">Popup</option>
            </select>

            <input id="search" placeholder="Type..." style={{ width: 320, marginRight: 8 }} />

            <InlineAIAssistComponent
                id="inlineAiAssist"
                ref={assistRef}
                responseMode="Popup"
                promptRequest={handlePromptRequest}
                popupWidth="500px"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));
