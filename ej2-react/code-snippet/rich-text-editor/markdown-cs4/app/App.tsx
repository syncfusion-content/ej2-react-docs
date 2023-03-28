


/**
 * Rich Text Editor - Markdown to HTML Sample
 */
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { Image, Link, MarkdownEditor, RichTextEditor, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
RichTextEditor.Inject(Image, Link, MarkdownEditor, Toolbar);
import * as React from 'react';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    defaultRTE = new RichTextEditor({
      actionComplete: (e: any) => {
        if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
          fullPreview({ mode: true, type: '' });
        } else if (!(mdSplit as any).parentElement.classList.contains('e-overlay')) {
          if (e.targetItem === 'Minimize') {
            textArea.style.display = 'block';
            textArea.style.width = '100%';
            if (htmlPreview) { htmlPreview.style.display = 'none'; }
              mdSplit.classList.remove('e-active');
              mdSource.classList.remove('e-active');
          }
          markDownConversion();
        }
        setTimeout(() => {
          defaultRTE.toolbarModule.refreshToolbarOverflow();
        }, 400);
      },
      created: () => {
        textArea = (defaultRTE as any).contentModule.getEditPanel();
        textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
          markDownConversion();
        });

        mdSource = document.getElementById('preview-code') as any;
        mdSource.addEventListener('click', (e: MouseEvent) => {
        fullPreview({ mode: true, type: 'preview' });
        if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
          defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', 'Undo', 'Redo']);
          (e.currentTarget as any).parentElement.previousElementSibling.classList.add('e-overlay');
        } else {
          defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', 'Undo', 'Redo']);
          (e.currentTarget as any).parentElement.previousElementSibling.classList.remove('e-overlay');
        }
      });
      mdSplit = document.getElementById('MD_Preview') as any;
      mdSplit.addEventListener('click', (e: MouseEvent) => {
        if (defaultRTE.element.classList.contains('e-rte-full-screen')) {
          fullPreview({ mode: true, type: '' });
        }
        mdSource.classList.remove('e-active');
        if (!defaultRTE.element.classList.contains('e-rte-full-screen')) {
          defaultRTE.showFullScreen();
        }
      });
    },
      editorMode: 'Markdown',
      height: '300px',
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|',
          'CreateLink', 'Image', '|',
          {
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
            '<span class="e-btn-icon e-md-preview e-preview e-icons"></span></button>',
            tooltipText: 'Preview'
          },
          {
            template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                      '<span class="e-btn-icon e-view-side e-icons"></span></button>',
            tooltipText: 'Split Editor',
          },
          'FullScreen', '|', 'Undo', 'Redo']
        },
      valueTemplate: value,
    });
    defaultRTE.appendTo('#markdownPreview');
  });
  let mdSource: any;
  let mdSplit: HTMLElement;
  let htmlPreview: any;
  let defaultRTE: RichTextEditor;
  let textArea: HTMLTextAreaElement;

  let value: string = `***Overview***
  The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor used to create and edit the content and return valid HTML markup or markdown (MD) of the content. The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.

  ***Key features***
  - *Mode*: Provides IFRAME and DIV mode.
  - *Module*: Modular library to load the necessary functionality on demand.
  - *Toolbar*: Provide a fully customizable toolbar.
  - *Editing*: HTML view to edit the source directly for developers.
  - *Third-party Integration*: Supports to integrate third-party library.
  - *Preview*: Preview the modified content before saving it.
  - *Tools*: Handling images, hyperlinks, video, uploads and more.
  - *Undo and Redo*: Undo/redo manager.
  - *Lists*: Creates bulleted and numbered list.`;

  function markDownConversion(): void {
    if (mdSplit.classList.contains('e-active')) {
      const id: string = defaultRTE.getID() + 'html-preview';
      const htmlPreview: any = defaultRTE.element.querySelector('#' + id);
      htmlPreview.innerHTML = marked((defaultRTE.contentModule.getEditPanel()).value);
    }
  }

  function fullPreview(e: { [key: string]: string | boolean }): void {
    const id: string = defaultRTE.getID() + 'html-preview';
    htmlPreview = defaultRTE.element.querySelector('#' + id);
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
      htmlPreview.innerHTML = marked((defaultRTE.contentModule.getEditPanel()).value);
      mdSource.parentElement.title = 'Code View';
    }
  }
    return (
      <div id="rte-default" className='control-pane'>
        <div className='control-section' id="rtePreview">
          <div className="content-wrapper">
            <div id="markdownPreview"/>
          </div>
        </div>
      </div>
    );
}

export default App;



