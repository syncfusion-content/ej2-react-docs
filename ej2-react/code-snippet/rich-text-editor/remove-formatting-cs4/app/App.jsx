import { HtmlEditor, Image, Inject, Link,Table,PasteCleanup, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let toolbarSettings = {
      items: [ 'ClearFormat']
    };
    let rteValue = `<p style="text-align: start;"><span style="color: rgb(37, 37, 37); font-family: &quot;Segoe UI&quot;, SegoeUI, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; background-color: rgb(255, 255, 255); display: inline !important; float: none;">The </span><span style="color: rgb(37, 37, 37); font-family: &quot;Segoe UI&quot;, SegoeUI, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; background-color: rgb(255, 255, 0); float: none; display: inline !important;"><strong style="font-size: 16px;">clear format</strong></span><span style="color: rgb(37, 37, 37); font-family: &quot;Segoe UI&quot;, SegoeUI, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; background-color: rgb(255, 255, 255); display: inline !important; float: none;"> tool is useful to remove all formatting styles (such as bold, italic, underline, color, superscript, subscript, and more) from currently selected text. As a result, all the text formatting will be cleared and return to its default formatting styles.</span><br></p>`;
    return (<RichTextEditorComponent height={450} value={rteValue} toolbarSettings={toolbarSettings}>
       <Inject services={[Toolbar, Image, Link, Image, Table, PasteCleanup, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
