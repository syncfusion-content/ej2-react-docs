import { createElement } from '@syncfusion/ej2-base';
import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public myCodeMirror: any;
  public textArea: HTMLElement;
  public rteObj: RichTextEditorComponent;

  public toolbarSettings: object = {
    items: ['SourceCode']
  }
  public value: string = `
  <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
          Users can format their content using standard toolbar commands.</p>
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
  `;

  public mirrorConversion(e: any): void {
    const id: string = this.rteObj.getID() + 'mirror-view';
    let mirrorView: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
    const charCount: HTMLElement = this.rteObj.element.querySelector('.e-rte-character-count') as HTMLElement;
    if (e.targetItem === 'Preview') {
      this.textArea.style.display = 'block';
      mirrorView.style.display = 'none';
      this.textArea.innerHTML = this.myCodeMirror.getValue();
      charCount.style.display = 'block';
    } else {
      if (!mirrorView) {
          mirrorView = createElement('div', { className: 'e-content' });
          mirrorView.id = id;
          (this.textArea as any).parentNode.appendChild(mirrorView);
      } else {
          mirrorView.innerHTML = '';
      }
      this.textArea.style.display = 'none';
      mirrorView.style.display = 'block';
      this.renderCodeMirror(mirrorView, this.rteObj.value);
      charCount.style.display = 'none';
    }
  }

  public renderCodeMirror(mirrorView: HTMLElement, content: string): void {
    this.myCodeMirror = CodeMirror(mirrorView, {
      lineNumbers: true,
      lineWrapping: true,
      mode: 'text/html',
      value: content
    });
  }

  public actionComplete(e: any) {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
      (this.rteObj as any).sourceCodeModule.getPanel().style.display = 'none';
      this.mirrorConversion(e);
    } else {
      setTimeout(() => {
        this.rteObj.toolbarModule.refreshToolbarOverflow();
      }, 400);
    }
  }

  public created(): void{
    this.textArea = (this.rteObj as any).contentModule.getEditPanel() as HTMLElement;
  }

  public render() {
    return (
      <RichTextEditorComponent ref={(richtexteditor) => { this.rteObj = richtexteditor! }} value={this.value} height={450} toolbarSettings={this.toolbarSettings} showCharCount={true} actionComplete={this.actionComplete = this.actionComplete.bind(this)} created={this.created = this.created.bind(this)}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Count]} />
      </RichTextEditorComponent>
    );
  }
}
export default App;