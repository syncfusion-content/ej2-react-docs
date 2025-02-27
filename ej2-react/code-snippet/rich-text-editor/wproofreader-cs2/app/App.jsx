import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import React, { useEffect, useRef } from 'react';
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

function App() {
  const rteRef = useRef(null);

  useEffect(() => {
    if (rteRef.current) {
      WProofreader.init({
        container: rteRef.current.contentModule.getEditPanel(),
        lang: 'en_US',
        serviceId: 'TDHiXV50gZlQaDw',
      });
    }
  }, []);

  const value = `<p>Enter you're text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>`;

  return (
    <RichTextEditorComponent ref={rteRef} value={value}>
    <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
  </RichTextEditorComponent>);
}
export default App;
