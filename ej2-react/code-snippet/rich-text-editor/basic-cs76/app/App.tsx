/**
 * Rich Text Editor - Quick Inline Toolbar Sample
 */
import { HtmlEditor, Image, Inject, Link, NodeSelection, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public rteObj: RichTextEditorComponent;
  public quickToolbarSettings: object = {
    image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
      'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',
      {
        template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-rotate-left"></span>',
        tooltipText: 'Rotate Left'
      },
      {
        template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-rotate-right"></span>',
        tooltipText: 'Rotate Right'
      }
    ]
  }
  private rteValue: string = "<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";

  public onToolbarClick(e: any): void {
    const nodeObj: NodeSelection = new NodeSelection();
    const range: Range = nodeObj.getRange((this.rteObj as any).contentModule.getDocument());
    const imgEle: HTMLElement = nodeObj.getNodeCollection(range)[0] as HTMLElement;
    if (e.item.tooltipText === 'Rotate Right') {
      const transform: number = (imgEle.style.transform === '') ? 0 :
      parseInt((imgEle as any).style.transform.split('(')[1].split(')')[0], 10);
      imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
    } else if (e.item.tooltipText === 'Rotate Left') {
      const transform: number = (imgEle.style.transform === '') ? 0 :
      Math.abs(parseInt((imgEle as any).style.transform.split('(')[1].split(')')[0], 10));
      imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
    }
  }

  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rteValue} ref={(richtexteditor) => { this.rteObj = richtexteditor! }} quickToolbarSettings={this.quickToolbarSettings} toolbarClick={this.onToolbarClick = this.onToolbarClick.bind(this)}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;