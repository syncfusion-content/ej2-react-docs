import * as React from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  Resize,
  QuickToolbar,
  Inject
} from '@syncfusion/ej2-react-richtexteditor';
import { SliderComponent, ChangeEventArgs } from '@syncfusion/ej2-react-inputs';

interface AppState {
  sliderValue: number[];
  maxLength: number;
}

class App extends React.Component<{}, AppState> {
  private rteRef = React.createRef<RichTextEditorComponent>();
  private sliderRef = React.createRef<SliderComponent>();

  private rteContent: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG ("what you see is what you get") editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, uploads, etc. Contains undo/redo manager.</p>`;

  constructor(props: {}) {
    super(props);
    this.state = {
      sliderValue: [0, 50],
      maxLength: 400
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      const panel = this.rteRef.current?.contentModule.getEditPanel();
      const realLength = panel?.textContent?.length ?? 0;

      this.setState({ maxLength: realLength });

      if (this.sliderRef.current) {
        this.sliderRef.current.max = realLength;
        this.sliderRef.current.dataBind();
      }

      panel?.focus();
      this.onSliderChange({ value: this.state.sliderValue } as ChangeEventArgs);
    }, 100);
  }

  getTextNodeAtOffset(root: Node, offset: number): { node: Text; offset: number } | null {
    let currentOffset = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);

    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      const nodeLength = node.textContent?.length ?? 0;

      if (currentOffset + nodeLength >= offset) {
        return {
          node,
          offset: offset - currentOffset
        };
      }

      currentOffset += nodeLength;
    }

    return null;
  }

  onSliderChange = (args: ChangeEventArgs): void => {
    const [start, end] = args.value as number[];
    const panel = this.rteRef.current?.contentModule.getEditPanel();
    const maxLength = panel?.textContent?.length ?? 0;

    const safeStart = Math.min(start, maxLength);
    const safeEnd = Math.min(end, maxLength);

    const startInfo = this.getTextNodeAtOffset(panel!, safeStart);
    const endInfo = this.getTextNodeAtOffset(panel!, safeEnd);

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

  render(): JSX.Element {
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
          <Inject services={[Toolbar, Image, Link, HtmlEditor, Resize, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    );
  }
}

export default App;