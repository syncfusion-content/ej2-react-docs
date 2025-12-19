import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, AIAssistant } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {

    const toolbarSettings: object = { items: ['AICommands', 'AIQuery'] };
    const aiAssistantSettings: object = {
        popupMaxHeight: 500,
        popupWidth: 500
    };

    return (
        <RichTextEditorComponent toolbarSettings={toolbarSettings} aiAssistantSettings={aiAssistantSettings}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, AIAssistant]} />
        </RichTextEditorComponent>
    );
}

export default App;