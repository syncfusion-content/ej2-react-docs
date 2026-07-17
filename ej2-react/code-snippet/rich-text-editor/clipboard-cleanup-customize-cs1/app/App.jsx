import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar, ClipBoardCleanup } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    onBeforeClipboardWrite(args) {
        if (args.operation === 'copy') {
            args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
            args.plainTextContent = 'This is customized content triggered while copy event';
        }
    }

    render() {
        return (<RichTextEditorComponent beforeClipboardWrite={this.onBeforeClipboardWrite}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, ClipBoardCleanup]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
