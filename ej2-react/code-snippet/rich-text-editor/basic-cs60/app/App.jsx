import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    toolbarSettings = {
        items: ['FontSize']
    };
    fontSize = {
        width: '40px'
    };
    render() {
        return (<RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} fontSize={this.fontSize}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
