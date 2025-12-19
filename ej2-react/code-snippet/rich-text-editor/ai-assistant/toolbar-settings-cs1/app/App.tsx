import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    private toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    private aiAssistantSettings: object = {
        headerToolbarSettings: ['AIcommands', 'Clear', 'Close'],
        promptToolbarSettings: ['Edit'],
        responseToolbarSettings: ['Copy', '|', 'Insert'],
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ]
    };
    public render() {
        return (
            <RichTextEditorComponent toolbarSettings={this.toolbarSettings} aiAssistantSettings={this.aiAssistantSettings} >
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
            </RichTextEditorComponent>
        );
    }
}
export default App;