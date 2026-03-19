import { InlineAIAssistComponent, ResponseItemSelectEventArgs, InlinePromptRequestEventArgs, ToolbarItemClickEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { marked } from 'marked';
import * as React from 'react';

const App: React.FC = () => {
    const assistRef = React.useRef<InlineAIAssistComponent>(null);
    const editableRef = React.useRef<HTMLDivElement>(null);
    const [stopStreaming, setStopStreaming] = React.useState(false);

    // Initialize Gemini API
    const geminiApiKey = ''; // Replace with your Gemini API key
    const genAI = new GoogleGenerativeAI(geminiApiKey);

    const handleSummarizeBtnClick = (): void => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    };

    // Stream AI response in chunks
    const streamResponse = async (response: string): Promise<void> => {
        let lastResponse = "";
        const responseUpdateRate = 10;
        let i = 0;
        const responseLength = response.length;
        while (i < responseLength && !stopStreaming) {
            lastResponse += response[i];
            i++;
            if (i % responseUpdateRate === 0 || i === responseLength) {
                const htmlResponse = await marked.parse(lastResponse);
                if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                    assistRef.current.addResponse(htmlResponse, i === responseLength);
                }
            }
            await new Promise(resolve => setTimeout(resolve, 15));
        }
    };

    // Handle user prompt: call Gemini model
    const handlePromptRequest = async (args: InlinePromptRequestEventArgs): Promise<void> => {
        try {
            setStopStreaming(false);
            const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Select the Gemini model
            const result = await model.generateContent((args.prompt) as string);
            const response = result.response.text();
            await streamResponse(response);
        } catch (error) {
            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(
                    '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
                );
            }
            setStopStreaming(true);
        }
    };

    const handleResponseItemSelect = (args: ResponseItemSelectEventArgs): void => {
        if (args.command.label === 'Accept') {
            if (editableRef.current && assistRef.current) {
                const lastResponse = assistRef.current.prompts && assistRef.current.prompts.length > 0
                    ? assistRef.current.prompts[assistRef.current.prompts.length - 1].response
                    : '';
                if (lastResponse) {
                    editableRef.current.innerHTML = '<p>' + lastResponse + '</p>';
                }
            }
            if (assistRef.current && typeof assistRef.current.hidePopup === 'function') {
                assistRef.current.hidePopup();
            }
        } else if (args.command.label === 'Discard') {
            if (assistRef.current && typeof assistRef.current.hidePopup === 'function') {
                assistRef.current.hidePopup();
            }
        }
    };

    const handleToolbarItemClick = (args: ToolbarItemClickEventArgs): void => {
        if (args.item && args.item.iconCss === 'e-icons e-inline-stop') {
            setStopStreaming(true);
        }
    };

    return (
        <div>
            <button 
                id="summarizeBtn" 
                className="e-btn e-primary" 
                style={{ marginBottom: '10px' }}
                onClick={handleSummarizeBtnClick}
            >
                Content Summarize
            </button>
            <div 
                id="editableText" 
                contentEditable="true" 
                ref={editableRef}
            >
                <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
                <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
            </div>
            <InlineAIAssistComponent
                id="defaultInlineAssist"
                ref={assistRef}
                relateTo="#summarizeBtn"
                promptRequest={handlePromptRequest}
                responseSettings={{
                    itemSelect: handleResponseItemSelect
                }}
                inlineToolbarSettings={{
                    itemClick: handleToolbarItemClick
                }}
                popupWidth="500px"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));