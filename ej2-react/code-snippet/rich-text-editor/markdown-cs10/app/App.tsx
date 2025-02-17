/**
 * Rich Text Editor - Markdown - Custom Format Sample
 */
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { Image, Inject, Link, MarkdownEditor, MarkdownFormatter, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { marked } from 'marked';

function App(){
   let rteObj: RichTextEditorComponent;
   let mdSource: HTMLElement;
   let mdSplit: HTMLElement;
   let htmlPreview: HTMLElement;
   let textArea: HTMLTextAreaElement;
     // set the value to Rich Text Editor
     let template: string = `The sample is configured with customized markdown syntax using the __formatter__ property. Type the content and click the toolbar item to view customized markdown syntax. For unordered list, you need to add a plus sign before the word (e.g., + list1). Or To make a phrase bold, you need to add two underscores before and after the phrase (e.g., __this text is bold__).`;

    // Rich Text Editor items list
    let items: object = ['Bold', 'Italic', 'StrikeThrough', '|',
     'Formats', 'OrderedList', 'UnorderedList', '|',
     'CreateLink', 'Image', '|',
    {
         template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
             '<span class="e-btn-icon e-icons e-md-preview"></span></button>',
             tooltipText: 'Preview',
    }, 'Undo', 'Redo'];
    let mdPreview: HTMLElement;

    // Rich Text Editor ToolbarSettings
    let toolbarSettings: object = {
        items: items
    };

    let formatter = new MarkdownFormatter({
        formatTags: {
            'Blockquote': '> '
        },
        listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
        selectionTags: {'Bold': '__',  'Italic': '_'}
    });

    function markDownConversion(): void {
        if (mdsource.classList.contains('e-active')) {
            const id: string = (rteObj as any).getID() + 'html-view';
            const htmlPreview: HTMLElement = (rteObj as any).element.querySelector('#' + id);
            htmlPreview.innerHTML = marked(((rteObj as any).contentModule.getEditPanel()).value);
        }
    }
    function fullPreview(e: { [key: string]: string | boolean }): void {
      const id: string = rteObj.getID() + 'html-preview';
      htmlPreview = rteObj.element.querySelector('#' + id);
      if ((mdSource.classList.contains('e-active') || mdSplit.classList.contains('e-active')) && e.mode) {
        mdSource.classList.remove('e-active');
        mdSplit.classList.remove('e-active');
        mdSource.parentElement.title = 'Preview';
        textArea.style.display = 'block';
        textArea.style.width = '100%';
        htmlPreview.style.display = 'none';
      } else {
        mdSource.classList.add('e-active');
        mdSplit.classList.add('e-active');
        if (!htmlPreview) {
          htmlPreview = createElement('div', { className: 'e-content' });
          htmlPreview.id = id;
          (textArea as any).parentNode.appendChild(htmlPreview);
        }
        if (e.type === 'preview') {
          textArea.style.display = 'none'; htmlPreview.classList.add('e-pre-source');
            htmlPreview.style.width = '100%';
        } else {
          htmlPreview.classList.remove('e-pre-source');
          textArea.style.width = '50%';
          htmlPreview.style.width = '50%';
        }
        htmlPreview.style.display = 'block';
        htmlPreview.innerHTML = marked((rteObj.contentModule.getEditPanel()).value);
        mdSource.parentElement.title = 'Code View';
      }
    }

  return (
       <RichTextEditorComponent id="markdownRTE"
           ref={(richtexteditor) => { rteObj = richtexteditor! }}
           height='260px' editorMode='Markdown'
           formatter= {formatter}
           valueTemplate={template} toolbarSettings={toolbarSettings} >
           <Inject services={[MarkdownEditor, Toolbar, Image, Link, QuickToolbar]} />
       </RichTextEditorComponent>
  );
}

export default App;
