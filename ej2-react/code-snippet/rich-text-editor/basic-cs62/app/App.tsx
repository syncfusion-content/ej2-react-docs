


/**
 * Rich Text Editor - Custom FontName and FontSize Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['FontName', 'FontSize']
  }

  private fontFamily: object = {
    items: [
      { text: 'Segoe UI', value: 'Segoe UI' },
      { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
      { text: 'Courier New', value: 'Courier New,Courier,monospace' },
      { text: 'Georgia', value: 'Georgia,serif' },
      { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
      { text: 'Calibri Light', value: 'CalibriLight' }
    ],
    width: '60px',
    default:'Segoe UI'
  }

  private fontSize: object = {
    items: [
      { text: '8', value: '8pt' },
      { text: '10', value: '10pt' },
      { text: '12', value: '12pt' },
      { text: '14', value: '14pt' },
      { text: '42', value: '42pt' }
    ],
    width: '40px',
    default: '10'
  }

  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} fontFamily={this.fontFamily} fontSize={this.fontSize}>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
        <ul>
          <li>
            <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
          </li>
          <li>
            <p>Capable of handling markdown editing.</p>
          </li>
          <li>
            <p>Contains a modular library to load the necessary functionality on demand.</p>
          </li>
          <li>
            <p>Provides a fully customizable toolbar.</p>
          </li>
          <li>
            <p>Provides HTML view to edit the source directly for developers.</p>
          </li>
          <li>
            <p>Supports third-party library integration.</p>
          </li>
          <li>
            <p>Allows preview of modified content before saving it.</p>
          </li>
          <li>
            <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
          </li>
          <li>
            <p>Contains undo/redo manager.</p>
          </li>
          <li>
            <p>Creates bulleted and numbered lists.</p>
          </li>
        </ul>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;



