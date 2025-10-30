import React, { useRef, useEffect, useState } from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
  Inject,
} from '@syncfusion/ej2-react-richtexteditor';
import { SliderComponent, ChangeEventArgs } from '@syncfusion/ej2-react-inputs';

function App() {
  const rteRef = useRef<RichTextEditorComponent>(null);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);
  const [maxLength, setMaxLength] = useState<number>(400);

  const rteContent: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`;

  useEffect(() => {
    const rte = rteRef.current;
    if (rte) {
      const panel = rte.contentModule.getEditPanel();
      const textNode = panel?.firstChild?.firstChild;
      if (textNode && textNode.textContent) {
        setMaxLength(textNode.textContent.length);
      }
    }
  }, []);

  function onSliderChange(args: ChangeEventArgs): void {
    const value = args.value as [number, number];
    const [start, end] = value;

    const rte = rteRef.current;
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

    setSliderValue([safeStart, safeEnd]);
  }

  return (
    <div id="container">
      <div className="sliderwrap">
        <label className="labeltext">Range Slider</label>
        <SliderComponent
          type="Range"
          value={sliderValue}
          min={0}
          max={maxLength}
          change={onSliderChange}
        />
      </div>

      <RichTextEditorComponent
        ref={rteRef}
        value={rteContent}
        height={400}
      >
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;