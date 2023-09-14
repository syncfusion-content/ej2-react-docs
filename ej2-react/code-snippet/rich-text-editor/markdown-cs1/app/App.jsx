{% raw %}
/**
 * Rich Text Editor - MarkdownEditor Sample
 */
import { createElement } from '@syncfusion/ej2-base';
import { Image, Inject, Link, MarkdownEditor, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as Marked from 'marked';
import * as React from 'react';
class App extends React.Component {
    rteObj;
    // Rich Text Editor items list
    items = ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|',
        {
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
            tooltipText: 'Preview',
        }, '|', 'Undo', 'Redo'];
    textArea;
    mdsource;
    mdPreview;
    // Rich Text Editor ToolbarSettings
    toolbarSettings = {
        items: this.items
    };
    // set the value to Rich Text Editor
    template() {
        return (<div>
    The sample is added to showcase **markdown editing**.
  Type or edit the content and apply formatting to view markdown formatted content.
  We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
  The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.
      </div>);
    }
    ;
    markDownConversion() {
        if (this.mdsource.classList.contains('e-active')) {
            const id = this.rteObj.getID() + 'html-view';
            const htmlPreview = this.rteObj.element.querySelector('#' + id);
            htmlPreview.innerHTML = Marked.marked(this.rteObj.contentModule.getEditPanel().value);
        }
    }
    fullPreview() {
        const id = this.rteObj.getID() + 'html-preview';
        let htmlPreview = this.rteObj.element.querySelector('#' + id);
        if (this.mdsource.classList.contains('e-active')) {
            this.mdsource.classList.remove('e-active');
            this.mdsource.parentElement.title = 'Preview';
            this.textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
        }
        else {
            this.mdsource.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                this.textArea.parentNode.appendChild(htmlPreview);
            }
            this.textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = Marked.marked(this.rteObj.contentModule.getEditPanel().value);
            this.mdsource.parentElement.title = 'Code View';
        }
    }
    rendereComplete() {
        this.textArea = this.rteObj.contentModule.getEditPanel();
        this.textArea.addEventListener('keyup', (e) => {
            this.markDownConversion();
        });
        this.mdsource = document.getElementById('preview-code');
        this.mdsource.addEventListener('click', (e) => {
            this.fullPreview();
            if (e.currentTarget.classList.contains('e-active')) {
                this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
            }
            else {
                this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
            }
        });
    }
    render() {
        return (<RichTextEditorComponent id="markdownRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor; }} editorMode='Markdown' height='250px' valueTemplate={this.template} toolbarSettings={this.toolbarSettings} created={this.rendereComplete.bind(this)}>
              <Inject services={[MarkdownEditor, Toolbar, Image, Link, QuickToolbar]}/>
              </RichTextEditorComponent>);
    }
}
export default App;
{% endraw %}