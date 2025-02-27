import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
    public rteObj: RichTextEditorComponent;

    private rteValue:string = "<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";

    public created(): void {
        const instance = this.rteObj;
        (this.rteObj as any).contentModule.getDocument().addEventListener("keydown",(e: any)=>{
            if(e.key === 's' && e.ctrlKey===true){
                e.preventDefault(); // to prevent default ctrl+s action
                instance.updateValue(); // to update the value after editing
                const value: any= instance.value; // you can get the RTE content to save in the desired database
            }
        });
    }

  public render() {
    return (
      <RichTextEditorComponent ref={(richtexteditor) => { this.rteObj = richtexteditor! }} value={this.rteValue} created={this.created = this.created.bind(this)} >
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;