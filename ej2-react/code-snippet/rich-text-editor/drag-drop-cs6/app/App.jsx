/**
 * Initilaize Rich Text Editor from React element
 */
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let insertAudioSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile'
    };
    return (<RichTextEditorComponent insertAudioSettings={insertAudioSettings}>
        <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
