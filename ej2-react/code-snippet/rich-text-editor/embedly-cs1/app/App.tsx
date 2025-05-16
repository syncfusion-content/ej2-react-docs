import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar  } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['CreateLink']
  }

  private rteValue:string = "<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";

  private actionComplete = (args:any) => {
      if (args.requestType === 'Links') {
            if (args.elements[0].parentNode && (args.elements[0].parentNode).tagName === 'A'){
              const emberEle: HTMLElement = document.createElement('blockquote');
              emberEle.setAttribute('class', 'embedly-card');
              emberEle.appendChild(args.elements[0].parentElement);
              emberEle.appendChild(document.createElement('p'));
              args.range.insertNode(emberEle);
            }
      }
  }
  
  public render() {
    return (
      <RichTextEditorComponent height={450} actionComplete={this.actionComplete} value={this.rteValue} toolbarSettings={this.toolbarSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;