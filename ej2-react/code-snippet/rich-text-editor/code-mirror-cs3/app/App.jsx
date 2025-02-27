import { createElement } from '@syncfusion/ej2-base';
import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript';
import * as React from 'react';

class App extends React.Component {
    myCodeMirror;
    textArea;
    rteObj;
    toolbarSettings = {
        items: ['SourceCode']
    };
    value = `
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
    mirrorConversion(e) {
        const id = this.rteObj.getID() + 'mirror-view';
        let mirrorView = this.rteObj.element.querySelector('#' + id);
        const charCount = this.rteObj.element.querySelector('.e-rte-character-count');
        if (e.targetItem === 'Preview') {
            this.textArea.style.display = 'block';
            mirrorView.style.display = 'none';
            this.textArea.innerHTML = this.myCodeMirror.getValue();
            charCount.style.display = 'block';
        }
        else {
            if (!mirrorView) {
                mirrorView = createElement('div', { className: 'e-content' });
                mirrorView.id = id;
                this.textArea.parentNode.appendChild(mirrorView);
            }
            else {
                mirrorView.innerHTML = '';
            }
            this.textArea.style.display = 'none';
            mirrorView.style.display = 'block';
            this.renderCodeMirror(mirrorView, this.rteObj.value);
            charCount.style.display = 'none';
        }
    }
    renderCodeMirror(mirrorView, content) {
        this.myCodeMirror = CodeMirror(mirrorView, {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'text/html',
            value: content
        });
    }
    actionComplete(e) {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            this.rteObj.sourceCodeModule.getPanel().style.display = 'none';
            this.mirrorConversion(e);
        }
        else {
            setTimeout(() => {
                this.rteObj.toolbarModule.refreshToolbarOverflow();
            }, 400);
        }
    }
    created() {
        this.textArea = this.rteObj.contentModule.getEditPanel();
    }
    render() {
        return (<RichTextEditorComponent ref={(richtexteditor) => { this.rteObj = richtexteditor; }} height={450} toolbarSettings={this.toolbarSettings} showCharCount={true} actionComplete={this.actionComplete = this.actionComplete.bind(this)} value={this.value} created={this.created = this.created.bind(this)}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Count]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
