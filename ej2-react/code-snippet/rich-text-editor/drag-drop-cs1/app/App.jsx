/**
 * Initilaize Rich Text Editor from React element
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    insertImageSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile'
    };
    render() {
        return (<RichTextEditorComponent insertImageSettings={this.insertImageSettings}>
              <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
          </RichTextEditorComponent>);
    }
}
export default App;
