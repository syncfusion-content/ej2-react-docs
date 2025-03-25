import { useState, useEffect } from 'react';
import { HtmlEditor, Image, Inject, Link, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  
  const [editorContent, setEditorContent] = useState<string>('Initial content');

  useEffect(() => {
    const timer = setTimeout(() => {
      setEditorContent('Updated content after 1 seconds');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <h3>Editor 1</h3>
      <RichTextEditorComponent value={editorContent}>
        <Inject services={[Toolbar, Link, Image, HtmlEditor]} />
      </RichTextEditorComponent>

      <h3>Editor 2</h3>
      <RichTextEditorComponent value={editorContent}>
        <Inject services={[Toolbar, Link, Image, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;