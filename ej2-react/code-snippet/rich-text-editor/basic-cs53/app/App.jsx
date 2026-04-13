import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
function App() {
    let template = `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;
    let rteObj;
    return (<div>
      <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { rteObj = richtexteditor; }} valueTemplate={template}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>
      </div>);
}
export default App;