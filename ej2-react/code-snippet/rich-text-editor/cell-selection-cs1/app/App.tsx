import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  

  private rteRef = React.createRef<RichTextEditorComponent>();

  private rteValue: string = `<table style="width:100%; border-collapse: collapse;" border="1">
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

  selectCell = (): void => {
    const panel = this.rteRef.current.contentModule.getEditPanel();
    const cells = panel.querySelectorAll('td');

    if (cells.length > 2) {
      const cell = cells[2]; // Third cell
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

  render(): JSX.Element {
    return (
      <div>
        <button
          className="e-btn"
          style={{ marginBottom: '20px' }}
          onClick={this.selectCell}
        >
          Select Cell
        </button>
        <RichTextEditorComponent ref={this.rteRef} value={this.rteValue}>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    );
  }
}

export default App;
