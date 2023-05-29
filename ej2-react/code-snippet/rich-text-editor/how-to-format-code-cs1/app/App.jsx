import { HtmlEditor, Inject, Link, RichTextEditorComponent, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';
class App extends React.Component {
    tools = {
        items: ['InsertCode']
    };
    render() {
        return (<RichTextEditorComponent toolbarSettings={this.tools}>
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
}
export default App;
