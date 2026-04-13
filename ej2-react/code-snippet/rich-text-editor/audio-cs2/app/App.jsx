import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

function App() {
    let toolbarSettings = {
        items: ['Audio']
    };
    let rteValue= " <p>Rich Text Editor allows inserting video and audio from online sources and the local computers where you want to insert a video and audio into your content.</p>";
    let insertAudioSettings = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
    return (<RichTextEditorComponent value={rteValue} height={450} toolbarSettings={toolbarSettings} insertAudioSettings={insertAudioSettings}>
        <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
}
export default App;
