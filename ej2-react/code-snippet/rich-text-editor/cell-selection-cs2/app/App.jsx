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

  const rteValue = `<table style="width:100%; border-collapse: collapse;" border="1">
    <thead>
      <tr>
        <th style="font-weight:bold; padding:8px;">Product</th>
        <th style="font-weight:bold; padding:8px;">Price</th>
        <th style="font-weight:bold; padding:8px;">Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px;">Product A</td>
        <td style="padding:8px;">$25</td>
        <td style="padding:8px;">Available</td>
      </tr>
      <tr>
        <td style="padding:8px;">Product B</td>
        <td style="padding:8px;">$40</td>
        <td style="padding:8px;">Out of Stock</td>
      </tr>
    </tbody>
  </table>`;

  const selectCell = () => {
    const panel = rteRef.current?.contentModule.getEditPanel();
    if (!panel) return;

    const cells = panel.querySelectorAll('td');
    if (cells.length > 2) {
      const cell = cells[2]; // Select the third cell
      const range = document.createRange();
      range.selectNode(cell);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }

      cell.style.backgroundColor = '#cce5ff';
      cell.classList.add('e-cell-select');
    }
  };

  return (
    <div>
      <button
        className="e-btn"
        style={{ marginBottom: '20px' }}
        onClick={selectCell}
      >
        Select Cell
      </button>

      <RichTextEditorComponent ref={rteRef} value={rteValue} height={450}>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;