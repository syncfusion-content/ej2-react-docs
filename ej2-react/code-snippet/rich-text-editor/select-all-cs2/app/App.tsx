import {
  HtmlEditor,
  Inject,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import React, { useRef } from 'react';

function App() {

  const rteRef = useRef<RichTextEditorComponent>(null);
  const rteValue: string = `<p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
    Users can format their content using standard toolbar commands.</p>`;

  const selectAllContent = (): void => {
    if (rteRef.current) {
      rteRef.current.selectAll();
    }
  };

  return (
    <div>
      <button className="e-btn" style={{ marginBottom: '20px' }} onClick={selectAllContent}>
        Select All
      </button>

      <RichTextEditorComponent height={450} ref={rteRef} value={rteValue}>
        <Inject services={[Toolbar, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;