import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    editor = React.createRef();
    toolbarSettings = { items: ['AICommands', 'AIQuery'] };
    aiAssistantSettings = {
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ],
        maxPromptHistory: 30
    };
    onSaveBtnClick = () => {
        const promptHistory = this.editor.current.getAIPromptHistory();
        console.log(promptHistory);
        // Handle DB Post and save history to the DB.
    };
    render() {
        return (
            <div>
                <RichTextEditorComponent ref={this.editor} toolbarSettings={this.toolbarSettings} aiAssistantSettings={this.aiAssistantSettings} >
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
                </RichTextEditorComponent><br />
                <button className="e-btn e-primary" onClick={this.onSaveBtnClick} > <span className="e-icons e-save"></span>Save</button >
            </div>
        );
    }
}
export default App;