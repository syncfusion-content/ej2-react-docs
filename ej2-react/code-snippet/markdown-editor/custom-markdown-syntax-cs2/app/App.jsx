import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { Image, Inject, Link, Table, MarkdownEditor, IToolbarItems, ToolbarSettingsModel, MarkdownFormatter, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import * as Marked from 'marked';

function App() {
    let rteObj;
    const template = `The sample is added to showcase **markdown editing**.
  
  Type or edit the content and apply formatting to view markdown formatted content.
      
  We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
      
  The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;

    const items = ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', 'CreateTable',
        {
            tooltipText: 'Preview',
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code" >' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
        }, '|', 'Undo', 'Redo'];
    let textArea;
    let mdsource;
    const toolbarSettings = {
        items: items
    };
    const formatter = new MarkdownFormatter({ 
        formatTags: {
            'Blockquote': '> '
        },
        listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
        selectionTags: { 'Bold': '__', 'Italic': '_' }
    });
    function markdownConversion() {
        if (mdsource.classList.contains('e-active')) {
            let id = rteObj.getID() + 'html-view';
            let htmlPreview = rteObj.element.querySelector('#' + id);
            htmlPreview.innerHTML = Marked(rteObj.contentModule.getEditPanel().value);
        }
    }
    function fullPreview() {
        let id = rteObj.getID() + 'html-preview';
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
            htmlPreview.innerHTML = Marked(rteObj.contentModule.getEditPanel().value);
            mdsource.parentElement.title = 'Code View';
        }
    }
    function rendereComplete() {
        textArea = rteObj.contentModule.getEditPanel();
        textArea.addEventListener('keyup', (e) => {
            markdownConversion();
        });
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', (e) => {
            fullPreview();
            if (e.currentTarget.classList.contains('e-active')) {
                rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'CreateTable', 'Undo', 'Redo']);
            }
            else {
                rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'CreateTable', 'Undo', 'Redo']);
            }
        });
    }
    return ( <div className='control-section' id="rteMarkdown">
        <div className="content-wrapper">
            <RichTextEditorComponent id="markdownRTE"
                ref={(richtexteditor) => { rteObj = richtexteditor }} editorMode='Markdown'
                height='250px' valueTemplate={template} formatter={formatter} created={rendereComplete} toolbarSettings={toolbarSettings} >
                <Inject services={[MarkdownEditor, Toolbar, Image, Link, Table]} />
            </RichTextEditorComponent>
        </div>
    </div>);
}
export default App;
