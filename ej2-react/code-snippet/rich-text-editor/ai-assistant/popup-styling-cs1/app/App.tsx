import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';


class App extends React.Component<{}, {}> {
    private editor = React.createRef<RichTextEditorComponent>();
    private toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    private onPromptRequest = (): void => {
        setTimeout(() => {
            this.editor.current?.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
            this.editor.current?.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
        }, 5000);
    };
    public render() {
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