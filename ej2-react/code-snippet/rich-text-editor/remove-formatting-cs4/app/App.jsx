import { HtmlEditor, Image, Inject, Link,Table,PasteCleanup, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let toolbarSettings = {
      items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
        'Outdent', 'Indent', '|', 'FormatPainter', 'ClearFormat',
        '|', 'FullScreen']
    };
    return (<RichTextEditorComponent height={450} toolbarSettings={toolbarSettings}>
       <Inject services={[Toolbar, Image, Link, Image, Table, PasteCleanup, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
