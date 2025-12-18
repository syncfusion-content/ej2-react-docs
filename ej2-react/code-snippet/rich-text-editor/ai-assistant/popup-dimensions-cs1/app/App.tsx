import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    private toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    private aiAssistantSettings: object = {
        popupMaxHeight: 500,
        popupWidth: 500
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