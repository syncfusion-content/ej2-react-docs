import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {

    const editor = React.createRef<RichTextEditorComponent>();
    const toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    const aiAssistantSettings: object = {
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ],
        maxPromptHistory: 30
    };
    const onSaveBtnClick = (): void => {
        const promptHistory = editor.current.getAIPromptHistory();
        console.log(promptHistory);
        // Handle DB Post and save history to the DB.
    };

    return (
        <div>
            <RichTextEditorComponent ref={editor} toolbarSettings={toolbarSettings} aiAssistantSettings={aiAssistantSettings} >
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
            </RichTextEditorComponent>
        </div><br />
        <button className="e-btn e-primary" onClick={onSaveBtnClick} > <span className="e-icons e-save"></span>Save</button >
    );
}

export default App;