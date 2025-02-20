import { HtmlEditor, Inject, Link, RichTextEditorComponent, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    const tools = {
        items: ['InsertCode']
    };
    return (<RichTextEditorComponent value={rteValue} toolbarSettings={tools}>
      <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
