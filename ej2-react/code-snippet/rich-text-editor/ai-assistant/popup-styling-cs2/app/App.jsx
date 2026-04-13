import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    const editor = React.createRef();
    const toolbarSettings = { items: ['AICommands', 'AIQuery'] };
    const onPromptRequest = () => {
        setTimeout(() => {
            editor.current?.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
            editor.current?.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
        }, 5000);
    };
    return (
        <div>
            <RichTextEditorComponent ref={editor} toolbarSettings={toolbarSettings} aiAssistantPromptRequest={onPromptRequest}>
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
            </RichTextEditorComponent>
        </div>
    );
}

export default App;