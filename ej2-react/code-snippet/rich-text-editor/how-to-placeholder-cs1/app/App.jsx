import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';
class App extends React.Component {
    placeholder = "Type something";
    render() {
        return (<RichTextEditorComponent placeholder={this.placeholder}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
