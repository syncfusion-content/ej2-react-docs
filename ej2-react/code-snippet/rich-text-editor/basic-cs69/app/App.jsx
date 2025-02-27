import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
    let toolbarSettings = {
        items: ['CreateTable']
    };
    let quickToolbarSettings = {
        table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles']
    };
    return (<RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} quickToolbarSettings={quickToolbarSettings}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]}/>
    </RichTextEditorComponent>);
}
export default App;
