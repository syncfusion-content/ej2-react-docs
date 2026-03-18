import { AIAssistViewComponent, PromptRequestEventArgs, PromptModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const markdownData: PromptModel[] = [
        {
            prompt: "What is Markdown?",
            response: `<div>
                        <h1>Markdown Guide</h1>
                        <p>Markdown is a lightweight markup language:</p>
                        <ul>
                            <li><strong>Headers:</strong> Use <code>#</code>, <code>##</code>, <code>###</code></li>
                            <li><strong>Bold:</strong> <code>**text**</code> for bold</li>
                            <li><strong>Italic:</strong> <code>*text*</code> for italic</li>
                            <li><strong>Code:</strong> Triple backticks for code blocks</li>
                            <li><strong>Lists:</strong> Use <code>-</code> for bullet points</li>
                        </ul>
                        <p>It's simple and perfect for documentation.</p>
                        </div>`,
            suggestions: ["How do I use bold?", "Show code block example"]
        },
        {
            prompt: "How do I use bold?",
            response: `<div>
                        <h1>Bold Text in Markdown</h1>
                        <p>Use double asterisks <code>**text**</code> or double underscores <code>__text__</code>:</p>
                        <p><strong>This is bold text</strong></p>
                        <p>Both methods produce the same result.</p>
                        </div>`,
            suggestions: ["What is Markdown?", "Show code block example"]
        }
    ];

    const defaultSuggestions: string[] = [
        "What is Markdown?",
        "How do I use bold?",
        "Show code block example"
    ];

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            const found = markdownData.find(item => item.prompt === args.prompt);
            
            const defaultResponse = 
                'For real-time Markdown help or more advanced questions, connect this component to an actual AI model (OpenAI, Gemini, Claude, etc.).';

            assistInstance.current?.addPromptResponse(
                found ? found.response : defaultResponse
            );

            assistInstance.current!.promptSuggestions = 
                found?.suggestions || defaultSuggestions;
        }, 1200);
    };

    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} promptSuggestions={defaultSuggestions}/>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));