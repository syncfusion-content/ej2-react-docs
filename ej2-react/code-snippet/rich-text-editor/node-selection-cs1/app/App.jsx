import * as React from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
  Inject,
} from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.rteRef = React.createRef();
    this.rteValue = `<p>This is paragraph one.</p><p>This is paragraph two.</p>`;
  }

  selectSecondParagraph = () => {
    const panel = this.rteRef.current?.contentModule.getEditPanel();
    const paragraphs = panel.querySelectorAll('p');

    if (paragraphs.length > 1) {
      const range = document.createRange();
      range.selectNode(paragraphs[1]); // Select the second paragraph

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  render() {
    return (
      <div>
        <button
          className="e-btn"
          style={{ marginBottom: '20px' }}
          onClick={this.selectSecondParagraph}
        >
          Select Paragraph
        </button>
        <RichTextEditorComponent ref={this.rteRef} value={this.rteValue}>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    );
  }
}

export default App;
