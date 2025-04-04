/**
 * Rich Text Editor - Resizable Sample
 */
import { HtmlEditor, Image, Inject, Link, Resize, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let rteValue = `<p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
                            Users can format their content using standard toolbar commands.</p>`;
    let resize = true;
    return (<RichTextEditorComponent enableResize={resize} value={rteValue}>
            <Inject services={[HtmlEditor, Toolbar, Image, Link, Resize, QuickToolbar]}/>
            </RichTextEditorComponent>);
}
export default App;
