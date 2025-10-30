import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
class App extends React.Component {

    constructor(props) {
    super(props);
    this.rteRef = createRef();

    // ✅ Initialize state properly
    this.state = {
      sliderValue: [0, 50],
      maxLength: 400,
    };

    // ✅ RTE content
    this.rteContent = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`;
  }

  componentDidMount() {
    const rte = this.rteRef.current;
    if (rte) {
      const panel = rte.contentModule.getEditPanel();
      const textNode = panel?.firstChild?.firstChild;
      if (textNode && textNode.textContent) {
        this.setState({ maxLength: textNode.textContent.length });
      }
    }
  }

  onSliderChange = (args) => {
    const value = args.value;
    const [start, end] = value;

    const rte = this.rteRef.current;
    if (!rte) return;

    const panel = rte.contentModule.getEditPanel();
    const textNode = panel?.firstChild?.firstChild;
    if (!textNode || !(textNode instanceof Text)) return;

    const safeStart = Math.min(start, textNode.length);
    const safeEnd = Math.min(end, textNode.length);

    const range = document.createRange();
    range.setStart(textNode, safeStart);
    range.setEnd(textNode, safeEnd);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    // ✅ Update slider value in state
    this.setState({ sliderValue: [safeStart, safeEnd] });
  };

  render() {
    const { sliderValue, maxLength } = this.state;

    return (
      <div id="container">
        <div className="sliderwrap">
          <label className="labeltext">Range Slider</label>
          <SliderComponent
            type="Range"
            value={sliderValue}
            min={0}
            max={maxLength}
            change={this.onSliderChange}
          />
        </div>

        <RichTextEditorComponent ref={this.rteRef} value={this.rteContent}>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    );
  }
}
export default App;
