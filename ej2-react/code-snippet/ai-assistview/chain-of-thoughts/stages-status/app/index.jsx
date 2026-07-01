import * as React from 'react';
import { useRef } from 'react';
import { AIAssistViewComponent, AIAssistView, AssistThinking } from '@syncfusion/ej2-react-interactive-chat';

AIAssistView.Inject(AssistThinking);

const App = () => {
    const aiAssistViewRef = useRef(null);
    const suggestions = [
        'Build a modern dashboard for my business',
        'Create a login page with validation',
        'Make a task management board'
    ];

    const onPromptRequest = (args) => {
        const inst = aiAssistViewRef.current;
        if (!inst)
            return;
        // Step 1 — show first thinking block as in-progress
        setTimeout(() => {
            inst.addPromptResponse({
                blocks: [
                    {
                        blockType: 'thinking',
                        title: 'Understanding your request',
                        collapsible: true,
                        collapsed: false,
                        isActive: true,
                        stages: [
                            {
                                id: 'step1',
                                status: 'inprogress',
                                content: 'Identified request as a business dashboard requirement.'
                            }
                        ]
                    }
                ]
            }, false);
            // Step 2 — complete step 1, start step 2
            setTimeout(() => {
                inst.addPromptResponse({
                    blocks: [
                        {
                            blockType: 'thinking',
                            title: 'Understanding your request',
                            collapsible: true,
                            collapsed: true,
                            isActive: false,
                            stages: [
                                {
                                    id: 'step1',
                                    status: 'completed',
                                    content: 'Identified request as a business dashboard requirement.'
                                }
                            ]
                        },
                        {
                            blockType: 'thinking',
                            title: 'Selecting UI components',
                            collapsible: true,
                            collapsed: false,
                            isActive: true,
                            stages: [
                                {
                                    id: 'step2',
                                    status: 'inprogress',
                                    content: 'Selecting the best UI components for the dashboard.'
                                }
                            ]
                        }
                    ]
                }, false);
                // Step 3 — final response with all steps completed
                setTimeout(() => {
                    inst.addPromptResponse({
                        blocks: [
                            {
                                blockType: 'thinking',
                                title: 'Understanding your request',
                                collapsible: true,
                                collapsed: true,
                                isActive: false,
                                stages: [
                                    {
                                        id: 'step1',
                                        status: 'completed',
                                        content: 'Identified request as a business dashboard requirement.'
                                    }
                                ]
                            },
                            {
                                blockType: 'thinking',
                                title: 'Selecting UI components',
                                collapsible: true,
                                collapsed: true,
                                isActive: false,
                                stages: [
                                    {
                                        id: 'step2',
                                        status: 'completed',
                                        content: 'Selecting the best UI components for the dashboard.'
                                    }
                                ]
                            },
                            {
                                blockType: 'thinking',
                                title: 'Finalizing output',
                                collapsible: true,
                                collapsed: true,
                                isActive: false,
                                stages: [
                                    {
                                        id: 'step3',
                                        status: 'completed',
                                        iconCss: 'e-icons e-check',
                                        content: 'Generated final dashboard structure successfully.'
                                    }
                                ]
                            }
                        ],
                        response: '## Business Dashboard Structure\n\n**Generated successfully.**\n\n### Features Included:\n- Key performance indicator cards\n- Revenue and sales charts\n- Recent activity data grid\n- Responsive layout for all devices\n- Clean navigation structure\n\n### Recommended Syncfusion Components:\n- Chart\n- Grid\n- Card\n- Sidebar\n- DropDownList'
                    }, true);
                }, 1000);
            }, 1000);
        }, 1000);
    };
    return (<div style={{ height: '350px', width: '650px', margin: '0 auto' }}>
      <br />
      <AIAssistViewComponent id="aiAssistView" ref={aiAssistViewRef} promptSuggestions={suggestions} promptRequest={onPromptRequest}/>
    </div>);
};
export default App;