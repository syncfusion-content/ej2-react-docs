/**
 * Rich Text Editor - Markdown to HTML Sample
 */
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { createElement } from '@syncfusion/ej2-base';
import { Image, Link, MarkdownEditor, RichTextEditor, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
RichTextEditor.Inject(Image, Link, MarkdownEditor, Toolbar);
import * as React from 'react';
class App extends React.Component {
    mdSource;
    mdSplit;
    htmlPreview;
    defaultRTE;
    textArea;
    value = `***Overview***
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
    componentDidMount() {
        this.defaultRTE = new RichTextEditor({
            actionComplete: (e) => {
                if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
                    this.fullPreview({ mode: true, type: '' });
                }
                else if (!this.mdSplit.parentElement.classList.contains('e-overlay')) {
                    if (e.targetItem === 'Minimize') {
                        this.textArea.style.display = 'block';
                        this.textArea.style.width = '100%';
                        if (this.htmlPreview) {
                            this.htmlPreview.style.display = 'none';
                        }
                        this.mdSplit.classList.remove('e-active');
                        this.mdSource.classList.remove('e-active');
                    }
                    this.markDownConversion();
                }
                setTimeout(() => {
                    this.defaultRTE.toolbarModule.refreshToolbarOverflow();
                }, 400);
            },
            created: () => {
                this.textArea = this.defaultRTE.contentModule.getEditPanel();
                this.textArea.addEventListener('keyup', (e) => {
                    this.markDownConversion();
                });
                this.mdSource = document.getElementById('preview-code');
                this.mdSource.addEventListener('click', (e) => {
                    this.fullPreview({ mode: true, type: 'preview' });
                    if (e.currentTarget.classList.contains('e-active')) {
                        this.defaultRTE.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                            'Formats', 'OrderedList', 'UnorderedList', '|',
                            'CreateLink', 'Image', 'Undo', 'Redo']);
                        e.currentTarget.parentElement.previousElementSibling.classList.add('e-overlay');
                    }
                    else {
                        this.defaultRTE.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                            'Formats', 'OrderedList', 'UnorderedList', '|',
                            'CreateLink', 'Image', 'Undo', 'Redo']);
                        e.currentTarget.parentElement.previousElementSibling.classList.remove('e-overlay');
                    }
                });
                this.mdSplit = document.getElementById('MD_Preview');
                this.mdSplit.addEventListener('click', (e) => {
                    if (this.defaultRTE.element.classList.contains('e-rte-full-screen')) {
                        this.fullPreview({ mode: true, type: '' });
                    }
                    this.mdSource.classList.remove('e-active');
                    if (!this.defaultRTE.element.classList.contains('e-rte-full-screen')) {
                        this.defaultRTE.showFullScreen();
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
                    'FullScreen', '|', 'Undo', 'Redo'
                ]
            },
            valueTemplate: this.value,
        });
        this.defaultRTE.appendTo('#markdownPreview');
    }
    markDownConversion() {
        if (this.mdSplit.classList.contains('e-active')) {
            const id = this.defaultRTE.getID() + 'html-preview';
            const htmlPreview = this.defaultRTE.element.querySelector('#' + id);
            htmlPreview.innerHTML = marked((this.defaultRTE.contentModule.getEditPanel()).value);
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
        return (<div id="rte-default" className='control-pane'>
        <div className='control-section' id="rtePreview">
          <div className="content-wrapper">
            <div id="markdownPreview"/>
          </div>
        </div>
      </div>);
    }
}
export default App;
