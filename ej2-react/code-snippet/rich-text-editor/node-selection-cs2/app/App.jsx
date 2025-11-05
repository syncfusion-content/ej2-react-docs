import React, { useRef } from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
  Inject
} from '@syncfusion/ej2-react-richtexteditor';

function App() {
  const rteRef = useRef(null);

  const rteValue = `<p>This is paragraph one.</p><p>This is paragraph two.</p>`;

  const selectSecondParagraph = () => {
    const panel = rteRef.current?.contentModule.getEditPanel();
    if (!panel) return;

    const paragraphs = panel.querySelectorAll('p');
    if (paragraphs.length > 1) {
      const range = document.createRange();
      range.selectNode(paragraphs[1]);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  return (
    <div>
      <button
        className="e-btn"
        style={{ marginBottom: '20px' }}
        onClick={selectSecondParagraph}
      >
        Select Node
      </button>

      <RichTextEditorComponent
        ref={rteRef}
        value={rteValue}
        height={450}
      >
        <Inject
          services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
        />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;