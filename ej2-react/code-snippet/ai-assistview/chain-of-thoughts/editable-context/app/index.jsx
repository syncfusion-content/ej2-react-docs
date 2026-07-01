import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
import { AIAssistViewComponent, AssistThinking, AIAssistView } from '@syncfusion/ej2-react-interactive-chat';

AIAssistView.Inject(AssistThinking);

const App = () => {
    const assistInstance = useRef(null);

    const onPromptRequest = (args) => {
        // Step 1
        setTimeout(() => {
            assistInstance.current?.addPromptResponse({
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
            });
            
            // Step 2
            setTimeout(() => {
                assistInstance.current?.addPromptResponse({
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
                                    iconCss: 'e-icons e-check',
                                    content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                    editableContext: [
                                        { type: 'tool', name: 'Charts', value: 'Analytics visualization' },
                                        { type: 'tool', name: 'Grid', value: 'Tabular data' },
                                        { type: 'tool', name: 'Cards', value: 'KPI metrics' }
                                    ]
                                }
                            ]
                        }
                    ]
                });
                
                // Step 3
                setTimeout(() => {
                    assistInstance.current?.addPromptResponse({
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
                                        iconCss: 'e-icons e-check',
                                        content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                        editableContext: [
                                            { type: 'tool', name: 'Charts', value: 'Analytics visualization' },
                                            { type: 'tool', name: 'Grid', value: 'Tabular data' },
                                            { type: 'tool', name: 'Cards', value: 'KPI metrics' }
                                        ]
                                    }
                                ]
                            },
                            {
                                blockType: 'thinking',
                                title: 'Designing layout structure',
                                collapsible: true,
                                collapsed: false,
                                isActive: true,
                                stages: [
                                    {
                                        id: 'step3',
                                        status: 'inprogress',
                                        iconCss: 'e-icons e-check',
                                        content: 'Created responsive {0} layout structure.',
                                        editableContext: [
                                            { type: 'context', name: '12-column', value: '12-column grid' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    });
                    
                    // Step 4 (FINAL RESPONSE)
                    setTimeout(() => {
                        assistInstance.current?.addPromptResponse({
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
                                            iconCss: 'e-icons e-check',
                                            content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                            editableContext: [
                                                { type: 'tool', name: 'Charts', value: 'Analytics visualization' },
                                                { type: 'tool', name: 'Grid', value: 'Tabular data' },
                                                { type: 'tool', name: 'Cards', value: 'KPI metrics' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    blockType: 'thinking',
                                    title: 'Designing layout structure',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step3',
                                            status: 'completed',
                                            iconCss: 'e-icons e-check',
                                            content: 'Created responsive {0} layout structure.',
                                            editableContext: [
                                                { type: 'context', name: '12-column', value: '12-column grid' }
                                            ]
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
                                            id: 'step4',
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
        }, 1000);
    };

    return (
        <div id="container" style={{ height: '350px', width: '650px', margin: '0 auto' }}>
            <br />
            <AIAssistViewComponent
                id="aiAssistView"
                ref={assistInstance}
                promptRequest={onPromptRequest}
                enableStreaming={true}
            />
        </div>
    );
};

export default App;