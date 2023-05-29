


/**
 * Rich Text Editor - Paste Cleanup Sample
 */
import { HtmlEditor, Image, Inject, Link, PasteCleanup, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  let toolbarSettings: object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
    ]
  }
  let pasteCleanupSettings: object = {
    allowedStyleProps: ['color', 'margin', 'font-size'],
    deniedAttrs: ['class', 'title', 'id'],
    deniedTags: ['a'],
    keepFormat: false,
    plainText: false,
    prompt: true
  }


  return (
    <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings} pasteCleanupSettings={pasteCleanupSettings}>
      <p>Rich Text Editor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
      <p><b>Paste Cleanup properties:</b></p>
      <ul>
          <li>
              <p>prompt - specifies whether to enable the prompt when pasting in Rich Text Editor.</p>
          </li>
          <li>
              <p>plainText - specifies whether to paste as plain text or not in Rich Text Editor.</p>
          </li>
          <li>
              <p>keepFormat- specifies whether to keep or remove the format when pasting in Rich Text Editor.</p>
          </li>
          <li>
              <p>deniedTags - specifies the tags to restrict when pasting in Rich Text Editor.</p>
          </li>
          <li>
              <p>deniedAttributes - specifies the attributes to restrict when pasting in Rich Text Editor.</p>
          </li>
          <li>
              <p>allowedStyleProperties - specifies the allowed style properties when pasting in Rich Text Editor.</p>
          </li>
      </ul>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, PasteCleanup]} />
    </RichTextEditorComponent>
  );
}

export default App;



