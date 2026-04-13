import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {

    const toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    const aiAssistantSettings: object = {
        commands: [
            { text: 'Rewrite', prompt: 'Rewrite the content to be more refined.' },
            { text: 'Elaborate', prompt: 'Expand on the following content with more detail and explanation:' },
            {
                text: 'Change Tone',
                items: [
                    { text: 'Professional', prompt: 'Rewrite the following content in a professional tone:' },
                    { text: 'Casual', prompt: 'Rewrite the following content in a casual, conversational tone:' },
                    { text: 'Direct', prompt: 'Rewrite the following content to be more direct and to the point:' },
                ],
            },
        ]
    };

    return (
        <RichTextEditorComponent toolbarSettings={toolbarSettings} aiAssistantSettings={aiAssistantSettings}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
        </RichTextEditorComponent>
    );
}

export default App;