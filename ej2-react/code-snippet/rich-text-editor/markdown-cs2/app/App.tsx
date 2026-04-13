import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { Image, Inject, Link, MarkdownEditor, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import * as Marked from 'marked';

function App() {
  let rteObj: RichTextEditorComponent;
  // Rich Text Editor items list
  let items: object = ['Bold', 'Italic', 'StrikeThrough', '|',
  'Formats', 'OrderedList', 'UnorderedList', '|',
  'CreateLink', 'Image', '|',
  {
      template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
      '<span class="e-btn-icon e-md-preview e-icons"></span></button>',
      tooltipText: 'Preview',
  }, '|', 'Undo', 'Redo'];

  let textArea: HTMLTextAreaElement;
  let mdsource: any;
  let mdPreview: HTMLElement;

  // Rich Text Editor ToolbarSettings
  let toolbarSettings: object = {
      items: items
  };

  // set the value to Rich Text Editor
  let value: string = " The sample is added to showcase **markdown editing**. Type or edit the content and apply formatting to view markdown formatted content. We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";

  function markDownConversion(): void {
      if (mdsource.classList.contains('e-active')) {
          const id: string = rteObj.getID() + 'html-view';
          const htmlPreview: HTMLElement = rteObj.element.querySelector('#' + id) as any;
          htmlPreview.innerHTML = Marked(((rteObj as any).contentModule.getEditPanel() as HTMLTextAreaElement).value);
      }
  }
  function fullPreview(): void {
      const id: string = rteObj.getID() + 'html-preview';
      let htmlPreview: HTMLElement = (rteObj as any).element.querySelector('#' + id);
      if (mdsource.classList.contains('e-active')) {
          mdsource.classList.remove('e-active');
          mdsource.parentElement.title = 'Preview';
          textArea.style.display = 'block';
          htmlPreview.style.display = 'none';
      } else {
          mdsource.classList.add('e-active');
          if (!htmlPreview) {
              htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
              htmlPreview.id = id;
              (textArea as any).parentNode.appendChild(htmlPreview);
          }
          textArea.style.display = 'none';
          htmlPreview.style.display = 'block';
          htmlPreview.innerHTML = Marked(((rteObj as any).contentModule.getEditPanel() as HTMLTextAreaElement).value);
          mdsource.parentElement.title = 'Code View';
      }
  }
  
  function rendereComplete(): void {
      textArea = (rteObj as any).contentModule.getEditPanel() as HTMLTextAreaElement;
      textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
          markDownConversion();
      });
      mdsource = document.getElementById('preview-code');
      mdsource.addEventListener('click', (e: MouseEvent) => {
          fullPreview();
          if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
              rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
              'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
          } else {
              rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
              'UnorderedList', 'CreateLink', 'Image', 'Formats', 'Undo', 'Redo']);
          }
      });
  }

  return (
    <RichTextEditorComponent id="markdownRTE" ref={(richtexteditor) => {rteObj = richtexteditor! }} editorMode='Markdown'
        height='250px' value={value} created={rendereComplete} toolbarSettings={toolbarSettings} >
        <Inject services={[MarkdownEditor, Toolbar, Image, Link]} />
        </RichTextEditorComponent>
  );
}

export default App;