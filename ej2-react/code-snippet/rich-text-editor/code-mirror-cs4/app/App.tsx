{% raw %}



/**
 * Rich Text Editor - Code Mirror sample
 */
import { createElement } from '@syncfusion/ej2-base';
import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript';
import * as React from 'react';

function App(){
  let myCodeMirror: any;
  let textArea: HTMLElement;
  let rteObj: RichTextEditorComponent;

  let toolbarSettings: object = {
    items: ['SourceCode']
  }
  let value: string = `
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

  function mirrorConversion(e: any): void {
    const id: string = rteObj.getID() + 'mirror-view';
    let mirrorView: HTMLElement = rteObj.element.querySelector('#' + id) as HTMLElement;
    const charCount: HTMLElement = rteObj.element.querySelector('.e-rte-character-count') as HTMLElement;
    if (e.targetItem === 'Preview') {
      textArea.style.display = 'block';
      mirrorView.style.display = 'none';
      textArea.innerHTML = myCodeMirror.getValue();
      charCount.style.display = 'block';
    } else {
      if (!mirrorView) {
          mirrorView = createElement('div', { className: 'e-content' });
          mirrorView.id = id;
          (textArea as any).parentNode.appendChild(mirrorView);
      } else {
          mirrorView.innerHTML = '';
      }
      textArea.style.display = 'none';
      mirrorView.style.display = 'block';
      renderCodeMirror(mirrorView, rteObj.value);
      charCount.style.display = 'none';
    }
  }

  function renderCodeMirror(mirrorView: HTMLElement, content: string): void {
    myCodeMirror = CodeMirror(mirrorView, {
      lineNumbers: true,
      lineWrapping: true,
      mode: 'text/html',
      value: content
    });
  }

  function actionComplete(e: any) {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
      (rteObj as any).sourceCodeModule.getPanel().style.display = 'none';
      mirrorConversion(e);
    } else {
      setTimeout(() => {
        rteObj.toolbarModule.refreshToolbarOverflow();
      }, 400);
    }
  }

  function created(): void{
    textArea = (rteObj as any).contentModule.getEditPanel() as HTMLElement;
  }

    return (
      <RichTextEditorComponent ref={(richtexteditor) => { rteObj = richtexteditor! }} height={450} toolbarSettings={toolbarSettings} showCharCount={true} actionComplete={actionComplete.bind(this)} created={created.bind(this)}>
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
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Count]} />
      </RichTextEditorComponent>
    );
}

export default App;



{% endraw %}