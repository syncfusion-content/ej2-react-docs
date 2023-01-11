import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';
function App() {
    let rteObj;
    function created() {
        const instance = rteObj;
        rteObj.contentModule.getDocument().addEventListener("keydown", (e) => {
            if (e.key === 's' && e.ctrlKey === true) {
                e.preventDefault(); // to prevent default ctrl+s action
                instance.updateValue(); // to update the value after editing
                // const value: any= instance.value; // you can get the RTE content to save in the desired database
            }
        });
    }
    return (<RichTextEditorComponent ref={(richtexteditor) => { rteObj = richtexteditor; }} created={created.bind(this)}>
      <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
      <ul>
        <li>
          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
        </li>
        <li>
          <p>Capable of handling markdown editing.</p>
        </li>
      </ul>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
