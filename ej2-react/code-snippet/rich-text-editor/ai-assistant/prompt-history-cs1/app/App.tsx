import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    private editor = React.createRef<RichTextEditorComponent>();
    private toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    private aiAssistantSettings: object = {
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ],
        maxPromptHistory: 30
    };
    private onSaveBtnClick = (): void => {
        const promptHistory = this.editor.current.getAIPromptHistory();
        console.log(promptHistory);
        // Handle DB Post and save history to the DB.
    };
    public render() {
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