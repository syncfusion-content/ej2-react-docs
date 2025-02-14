import { HtmlEditor, Image, Inject, Link, QuickToolbar, Table, PasteCleanup, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component {
    toolbarSettings = {
      items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
        'Outdent', 'Indent', '|', 'FormatPainter', 'ClearFormat',
        '|', 'FullScreen']
    };
    render() {
        return (<RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings}>
        <Inject services={[Toolbar, Image, Link, Image, Table, PasteCleanup, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
