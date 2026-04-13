import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    toolbarSettings = { items: ['AICommands', 'AIQuery'] };
    aiAssistantSettings = {
        bannerTemplate: `<div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistant</h3>
            <i>AI-generated results can be error-prone; review them carefully.</i>
        </div>`
    };
    render() {
        return (
            <RichTextEditorComponent toolbarSettings={this.toolbarSettings} aiAssistantSettings={this.aiAssistantSettings} >
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
            </RichTextEditorComponent>
        );
    }
}
export default App;