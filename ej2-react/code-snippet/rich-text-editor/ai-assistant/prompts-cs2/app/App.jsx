import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {

    const toolbarSettings = { items: ['AICommands', 'AIQuery'] };
    const aiAssistantSettings = {
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ],
        suggestions: [
            'What are the popular components of Essential Studio?',
            'Which web frameworks are supported by Essential Studio?'
        ]
    };

    return (
        <RichTextEditorComponent toolbarSettings={toolbarSettings} aiAssistantSettings={aiAssistantSettings}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
        </RichTextEditorComponent>
    );
}

export default App;