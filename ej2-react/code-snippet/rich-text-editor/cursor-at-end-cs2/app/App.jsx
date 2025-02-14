import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  let rteObj;
  const [value, setValue] = useState(`
        <p>Rich Text Editor allows inserting images from online sources as well as from a local computer into your content.</p>
        <p>Get started with the Quick Toolbar by clicking on the image.</p>
        <p>Custom styles can be added to the selected image inside the Rich Text Editor through the quick toolbar.</p>
    `);

  useEffect(() => {
    focusCursorAtEnd();
  }, []);

  const focusCursorAtEnd = () => {
    if (rteObj) {
      setTimeout(() => {
        const editorElement = rteObj.contentModule.getEditPanel();
        editorElement.focus();
        const range = document.createRange();
        range.selectNodeContents(editorElement);
        range.collapse(false);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }, 0);
    }
  };
    
    return ( 
    <RichTextEditorComponent height={450} ref={(richtexteditor) => {rteObj = richtexteditor;}} value={value}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>);
}
export default App;
