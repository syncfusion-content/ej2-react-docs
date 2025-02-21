import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar  } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let rteObj: RichTextEditorComponent;

  let toolbarSettings: object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  }

  let keyConfig: object = {
    bold: 'ctrl+alt+b',
    italic: 'ctrl+alt+i',
    underline: 'ctrl+alt+u',
  }

  function docKeyUp(e: any) {
    if (e.altKey && e.keyCode === 84) { /* t */
      // press alt+t to focus the component.
      rteObj.focusIn();
    }
  }

  function componentDidMount() {
    document.addEventListener('keyup', docKeyUp.bind(this));
  }

    return (
      <RichTextEditorComponent ref={(richtexteditor) => { rteObj = richtexteditor! }} height={450} toolbarSettings={toolbarSettings} keyConfig={keyConfig}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
}

export default App;