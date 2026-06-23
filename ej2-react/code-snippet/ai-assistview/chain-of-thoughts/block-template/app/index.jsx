import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { AIAssistViewComponent, AssistThinking, AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';

AIAssistView.Inject(AssistThinking);

const App = () => {
    const assistInstance = useRef(null);

    const blockTemplate = (data) => {
        const block = data.block;
        const stagesHtml = (block.stages || [])
            .map((s) => `<li>${s.content}</li>`)
            .join('');

        return `
            <div class="custom-thinking-block">
                <div class="custom-thinking-title">
                    <span class="e-icons ${block.isActive ? 'e-spinner' : 'e-check'}"></span>
                    <strong>${block.title || 'Thinking'}</strong>
                </div>
                <ul class="custom-thinking-stages">${stagesHtml}</ul>
            </div>
        `;
    };

    const initialPrompts = [
        {
            prompt: 'What is the capital of France?',
            response: 'The capital of France is Paris.',
            blocks: [
                {
                    blockType: 'thinking',
                    title: 'Fact lookup',
                    isActive: false,
                    collapsed: false,
                    collapsible: false,
                    stages: [
                        { 
                            id: 'step1', 
                            status: 'completed', 
                            content: 'Checked knowledge base for European capitals.' 
                        }
                    ]
                }
            ]
        }
    ];

    useEffect(() => {
        if (assistInstance.current) {
            (assistInstance.current).blockTemplate = blockTemplate;
        }
    }, []);

    const onPromptRequest = (args) => {
        setTimeout(() => {
            const defaultResponse = 
                'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';

            assistInstance.current?.addPromptResponse({
                blocks: [],
                response: defaultResponse
            }, true);
        }, 1000);
    };

    return (
        <div style={{ height: '600px', width: '800px', margin: '20px auto' }}>
            <AIAssistViewComponent
                id="aiAssistView"
                ref={assistInstance}
                prompts={initialPrompts}
                promptRequest={onPromptRequest}
                height="100%"
                width="100%"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));