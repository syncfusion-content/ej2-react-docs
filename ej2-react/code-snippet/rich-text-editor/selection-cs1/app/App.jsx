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
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.rteRef = React.createRef();
    this.sliderRef = React.createRef();

    this.state = {
      sliderValue: [0, 50],
      maxLength: 400,
    };

    this.rteContent = `<p>The Syncfusion Rich Text Editor, a WYSIWYG ("what you see is what you get") editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, uploads, etc. Contains undo/redo manager.</p>`;
  }

  componentDidMount() {
    setTimeout(() => {
      const panel = this.rteRef.current.contentModule.getEditPanel();
      const realLength = panel.textContent?.length || 0;

      this.setState({ maxLength: realLength });

      if (this.sliderRef.current) {
        this.sliderRef.current.max = realLength;
        this.sliderRef.current.dataBind();
      }

      panel.focus();
      this.onSliderChange({ value: this.state.sliderValue });
    }, 100);
  }

  getTextNodeAtOffset(root, offset) {
    let currentOffset = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const nodeLength = node.textContent.length;

      if (currentOffset + nodeLength >= offset) {
        return {
          node,
          offset: offset - currentOffset,
        };
      }

      currentOffset += nodeLength;
    }

    return null;
  }

  onSliderChange = (args) => {
    const [start, end] = args.value;
    const panel = this.rteRef.current.contentModule.getEditPanel();
    const maxLength = panel.textContent?.length || 0;

    const safeStart = Math.min(start, maxLength);
    const safeEnd = Math.min(end, maxLength);

    const startInfo = this.getTextNodeAtOffset(panel, safeStart);
    const endInfo = this.getTextNodeAtOffset(panel, safeEnd);

    if (startInfo && endInfo) {
      const range = document.createRange();
      range.setStart(startInfo.node, startInfo.offset);
      range.setEnd(endInfo.node, endInfo.offset);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    this.setState({ sliderValue: [safeStart, safeEnd] });
  };

  render() {
    const { sliderValue, maxLength } = this.state;

    return (
      <div id="container">
        <div className="sliderwrap">
          <label className="labeltext">Range Slider</label>
          <SliderComponent
            ref={this.sliderRef}
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
