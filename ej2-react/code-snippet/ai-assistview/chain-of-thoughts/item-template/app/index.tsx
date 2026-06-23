import * as React from 'react';
import { useRef } from 'react';
import { AIAssistViewComponent, PromptRequestEventArgs, AssistThinking, AIAssistView } from '@syncfusion/ej2-react-interactive-chat';

AIAssistView.Inject(AssistThinking);

const itemTemplate = (data: any) => {
    const item = data.item || data;
    const statusClass = item.isStageInProgress ? 'e-stage-inprogress' : 'e-stage-done';
    const iconCss = item.iconCss || item.dotCss || '';
    return (
        <div className={`custom-stage-item ${statusClass}`}>
            <span className={`e-icons ${iconCss}`}></span>
            <div className="custom-stage-content">{item.content || ''}</div>
        </div>
    );
};

const App = () => {
    const assistInstance = useRef<AIAssistViewComponent>(null);

    const prompts = [
        {
            prompt: 'Explain the water cycle.',
            response: 'The water cycle describes how water moves continuously through the environment via evaporation, condensation, and precipitation.',
            blocks: [
                {
                    blockType: 'thinking'  ,
                    title: 'Understanding your request',
                    collapsed: true,
                    collapsible: true,
                    isActive: false,
                    stages: [
                        {
                            id: 'step1',
                            status: 'completed',
                            iconCss: 'e-icons e-check',
                            content: 'Identified request as a water cycle explanation.'
                        }
                    ]
                },
                {
                    blockType: 'thinking'  ,
                    title: 'Summarizing key stages',
                    collapsed: true,
                    collapsible: true,
                    isActive: false,
                    stages: [
                        {
                            id: 'step2',
                            status: 'completed',
                            iconCss: 'e-icons e-check',
                            content: 'Summarized key stages concisely.'
                        }
                    ]
                },
                {
                    blockType: 'thinking'  ,
                    title: 'Composing response',
                    collapsed: true,
                    collapsible: true,
                    isActive: false,
                    stages: [
                        {
                            id: 'step3',
                            status: 'completed',
                            iconCss: 'e-icons e-check',
                            content: 'Composed a clear single-paragraph response.'
                        }
                    ]
                }
            ]
        }
    ];

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            assistInstance.current?.addPromptResponse({
                response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
            });
        }, 1000);
    };

    return (
        <div id="container">
            <br />
            <AIAssistViewComponent
                id="aiAssistView"
                ref={assistInstance}
                prompts={prompts}
                itemTemplate={itemTemplate}
                promptRequest={onPromptRequest}
            />
        </div>
    );
};

export default App;