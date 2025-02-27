import { createElement } from '@syncfusion/ej2-base';
import { Image, Inject, Link, MarkdownEditor, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as Marked from 'marked';
import * as React from 'react';

function App() {
    let rteObj;
    // Rich Text Editor items list
    let items = ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|',
        {
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
            tooltipText: 'Preview',
        }, '|', 'Undo', 'Redo'];
    let textArea;
    let mdsource;
    let mdPreview;
    // Rich Text Editor ToolbarSettings
    let toolbarSettings = {
        items: items
    };
    // set the value to Rich Text Editor
    function template() {
        return (<div>
        The sample is added to showcase **markdown editing**. Type or edit the content and apply formatting to view markdown formatted content. We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
        The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.
      </div>);
    }
    ;
    function markDownConversion() {
        if (mdsource.classList.contains('e-active')) {
            const id = rteObj.getID() + 'html-view';
            const htmlPreview = rteObj.element.querySelector('#' + id);
            htmlPreview.innerHTML = Marked.marked(rteObj.contentModule.getEditPanel().value);
        }
    }
    function fullPreview() {
        const id = rteObj.getID() + 'html-preview';
        let htmlPreview = rteObj.element.querySelector('#' + id);
        if (mdsource.classList.contains('e-active')) {
            mdsource.classList.remove('e-active');
            mdsource.parentElement.title = 'Preview';
            textArea.style.display = 'block';
            htmlPreview.style.display = 'none';
        }
        else {
            mdsource.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                textArea.parentNode.appendChild(htmlPreview);
            }
            textArea.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = Marked.marked(rteObj.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    }
    function rendereComplete() {
        textArea = rteObj.contentModule.getEditPanel();
        textArea.addEventListener('keyup', (e) => {
            markDownConversion();
        });
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', (e) => {
            fullPreview();
            if (e.currentTarget.classList.contains('e-active')) {
                rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
            }
            else {
                rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                    'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
            }
        });
    }
    return (<RichTextEditorComponent id="markdownRTE" ref={(richtexteditor) => { rteObj = richtexteditor; }} editorMode='Markdown' height='250px' valueTemplate={template} created={rendereComplete} toolbarSettings={toolbarSettings}>
        <Inject services={[MarkdownEditor, Toolbar, Image, Link, QuickToolbar]}/>
        </RichTextEditorComponent>);
}
export default App;