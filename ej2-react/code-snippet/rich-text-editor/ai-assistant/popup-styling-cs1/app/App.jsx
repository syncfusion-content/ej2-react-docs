import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';


class App extends React.Component{
    editor = React.createRef();
    toolbarSettings = { items: ['AICommands', 'AIQuery'] };
    onPromptRequest = () => {
        setTimeout(() => {
            this.editor.current?.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
            this.editor.current?.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
        }, 5000);
    };
    render() {
        return (
            <div>
                <RichTextEditorComponent ref={this.editor} toolbarSettings={this.toolbarSettings} aiAssistantPromptRequest={this.onPromptRequest}>
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
                </RichTextEditorComponent>
            </div>
        );
    }
}
export default App;