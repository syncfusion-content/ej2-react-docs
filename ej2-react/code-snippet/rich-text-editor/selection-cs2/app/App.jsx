import { useRef, useEffect, useState } from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
  Inject
} from '@syncfusion/ej2-react-richtexteditor';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  const rteRef = useRef(null);
  const sliderRef = useRef(null);
  const [sliderValue, setSliderValue] = useState([0, 50]);
  const [maxLength, setMaxLength] = useState(400);

  const rteContent = `<p>The Syncfusion Rich Text Editor, a WYSIWYG ("what you see is what you get") editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, uploads, etc. Contains undo/redo manager.</p>`;

  useEffect(() => {
    setTimeout(() => {
      const rte = rteRef.current;
      if (!rte) return;

      const panel = rte.contentModule.getEditPanel();
      const realLength = panel.textContent ? panel.textContent.length : 0;

      setMaxLength(realLength);
      if (sliderRef.current) {
        sliderRef.current.max = realLength;
        sliderRef.current.dataBind();
      }

      panel.focus();
      onSliderChange({ value: sliderValue });
    }, 100);
  }, []);

  const getTextNodeAtOffset = (root, offset) => {
    let current = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const len = node.textContent ? node.textContent.length : 0;
      if (current + len >= offset) {
        return { node, offset: offset - current };
      }
      current += len;
    }
    return null;
  };

  const onSliderChange = (args) => {
    const [start, end] = args.value;
    const rte = rteRef.current;
    if (!rte) return;

    const panel = rte.contentModule.getEditPanel();
    const max = panel.textContent ? panel.textContent.length : 0;
    const safeStart = Math.min(start, max);
    const safeEnd = Math.min(end, max);

    const startInfo = getTextNodeAtOffset(panel, safeStart);
    const endInfo = getTextNodeAtOffset(panel, safeEnd);

    if (startInfo && endInfo) {
      const range = document.createRange();
      range.setStart(startInfo.node, startInfo.offset);
      range.setEnd(endInfo.node, endInfo.offset);
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }

    setSliderValue([safeStart, safeEnd]);
  };

  return (
    <div id="container">
      <div className="sliderwrap">
        <label className="labeltext">Range Slider</label>
        <SliderComponent
          ref={sliderRef}
          type="Range"
          value={sliderValue}
          min={0}
          max={maxLength}
          change={onSliderChange}
        />
      </div>

      <RichTextEditorComponent ref={rteRef} value={rteContent}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;