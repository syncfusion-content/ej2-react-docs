/**
 * Rich Text Editor - TextArea Sample
 */
import { Count, HtmlEditor, Image, Link, RichTextEditor, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Image, Link, Toolbar, Count);
import * as React from 'react';
import { useEffect } from "react";
function App() {
    useEffect(() => {
        rteObj = new RichTextEditor({
            height: 400,
            valueTemplate: template
        }, '#rteElement');
    });
    let rteObj;
    let template = `
    <p><a href="http://www.syncfusion.com">The Rich Text Editor</a> component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
    <img alt="Logo" src="http://cdn.syncfusion.com/content/images/sales/buynow/Character-opt.png" />
    <p><b>Key features:</b></p>
    <ul>
        <li> <p>Provides IFRAME and DIV modes</p> </li>
        <li> <p>Capable of handling markdown editing.</p> </li>
        <li> <p>Contains a modular library to load the necessary functionality on demand.</p> </li>
        <li> <p>Provides a fully customizable toolbar.</p> </li>
        <li> <p>Provides HTML view to edit the source directly for developers.</p> </li>
        <li> <p>Supports third-party library integration.</p> </li>
    </ul>`;
    return (<textarea id="rteElement"/>);
}
export default App;
