


/**
 * Rich Text Editor - MarkdownEditor KeyConfig sample
 */
import { Image, Inject, Link, MarkdownEditor, RichTextEditorComponent, Toolbar  } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let rteObj: RichTextEditorComponent;

  let toolbarSettings: object = {
    items: ['Bold', 'Italic', 'StrikeThrough', '|',
      'Formats', 'OrderedList', 'UnorderedList', '|',
      'CreateLink', 'Image', '|','Undo', 'Redo']
  }
  function valueTemplate(): JSX.Element {
    return(<div>
      The sample is added to showcase **markdown editing**.

      Type or edit the content and apply formatting to view markdown formatted content.

      We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

      The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.
      </div>);
  };


  function componentDidMount() {
    document.addEventListener('keyup', docKeyUp.bind(this));
  }

  function docKeyUp(e: any) {
    if (e.altKey && e.keyCode === 84) { /* t */
      // press alt+t to focus the component.
      rteObj.focusIn();
    }
  }

    return (
      <RichTextEditorComponent ref={(richtexteditor) => { rteObj = richtexteditor! }} height={450} toolbarSettings={toolbarSettings} valueTemplate={valueTemplate} editorMode={'Markdown'}>
        <Inject services={[Toolbar, Image, Link, MarkdownEditor]} />
      </RichTextEditorComponent>
    );
}

export default App;



