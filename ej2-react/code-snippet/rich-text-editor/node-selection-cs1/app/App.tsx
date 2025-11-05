import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  

  private rteRef = React.createRef<RichTextEditorComponent>();

  private rteValue: string = `<p>This is paragraph one.</p><p>This is paragraph two.</p>`;

  selectSecondParagraph = (): void => {
    const panel = this.rteRef.current?.contentModule.getEditPanel();
    if (!panel) return;

    const paragraphs = panel.querySelectorAll('p');
    if (paragraphs.length > 1) {
      const range = document.createRange();
      range.selectNode(paragraphs[1]); // Select the second <p> element

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  render(): JSX.Element {
    return (
      <div>
        <button
          className="e-btn"
          style={{ marginBottom: '20px' }}
          onClick={this.selectSecondParagraph}
        >
          Select Node
        </button>

        <RichTextEditorComponent
          ref={this.rteRef}
          value={this.rteValue}
          height={450}
        >
          <Inject
            services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
          />
        </RichTextEditorComponent>
      </div>
    );
  }
}

export default App;
