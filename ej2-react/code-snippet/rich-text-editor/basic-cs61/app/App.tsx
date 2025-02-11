import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let toolbarSettings: object = {
    items: ['FontSize']
  }

  let fontSize: object = {
    width: '40px'
  }
  
  return (
    <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} fontSize={fontSize}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;