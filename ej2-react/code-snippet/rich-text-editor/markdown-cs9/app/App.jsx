{% raw %}
/**
 * Rich Text Editor - Markdown - Custom Format Sample
 */
import { createElement } from '@syncfusion/ej2-base';
import { Image, Inject, Link, MarkdownEditor, MarkdownFormatter, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
class App extends React.Component {
    rteObj;
    mdSource;
    mdSplit;
    htmlPreview;
    defaultRTE;
    textArea;
    // set the value to Rich Text Editor
    template = `The sample is configured with customized markdown syntax using the __formatter__ property. Type the content and click the toolbar item to view customized markdown syntax. For unordered list, you need to add a plus sign before the word (e.g., + list1). Or To make a phrase bold, you need to add two underscores before and after the phrase (e.g., __this text is bold__).`;
    // Rich Text Editor items list
    items = ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|',
        {
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-icons e-md-preview"></span></button>',
            tooltipText: 'Preview',
        }, 'Undo', 'Redo'];
    mdsource;
    mdPreview;
    // Rich Text Editor ToolbarSettings
    toolbarSettings = {
        items: this.items
    };
    formatter = new MarkdownFormatter({
        formatTags: {
            'Blockquote': '> '
        },
        listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
        selectionTags: { 'Bold': '__', 'Italic': '_' }
    });
    markDownConversion() {
        if (this.mdsource.classList.contains('e-active')) {
            const id = this.rteObj.getID() + 'html-view';
            const htmlPreview = this.rteObj.element.querySelector('#' + id);
            htmlPreview.innerHTML = marked((this.rteObj.contentModule.getEditPanel()).value);
        }
    }
    fullPreview(e) {
        const id = this.defaultRTE.getID() + 'html-preview';
        this.htmlPreview = this.defaultRTE.element.querySelector('#' + id);
        if ((this.mdSource.classList.contains('e-active') || this.mdSplit.classList.contains('e-active')) && e.mode) {
            this.mdSource.classList.remove('e-active');
            this.mdSplit.classList.remove('e-active');
            this.mdSource.parentElement.title = 'Preview';
            this.textArea.style.display = 'block';
            this.textArea.style.width = '100%';
            this.htmlPreview.style.display = 'none';
        }
        else {
            this.mdSource.classList.add('e-active');
            this.mdSplit.classList.add('e-active');
            if (!this.htmlPreview) {
                this.htmlPreview = createElement('div', { className: 'e-content' });
                this.htmlPreview.id = id;
                this.textArea.parentNode.appendChild(this.htmlPreview);
            }
            if (e.type === 'preview') {
                this.textArea.style.display = 'none';
                this.htmlPreview.classList.add('e-pre-source');
                this.htmlPreview.style.width = '100%';
            }
            else {
                this.htmlPreview.classList.remove('e-pre-source');
                this.textArea.style.width = '50%';
                this.htmlPreview.style.width = '50%';
            }
            this.htmlPreview.style.display = 'block';
            this.htmlPreview.innerHTML = marked((this.defaultRTE.contentModule.getEditPanel()).value);
            this.mdSource.parentElement.title = 'Code View';
        }
    }
    render() {
        return (<RichTextEditorComponent id="markdownRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor; }} height='260px' editorMode='Markdown' formatter={this.formatter} valueTemplate={this.template} toolbarSettings={this.toolbarSettings}>
          <Inject services={[MarkdownEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
{% endraw %}