import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { Image, Inject, Link, Table, MarkdownEditor, IToolbarItems, ToolbarSettingsModel, MarkdownFormatter, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import * as Marked from 'marked';

class App extends React.Component<{},{}> {
  private rteObj: RichTextEditorComponent;

  // set the value to Rich Text Editor
  private template: string = `The sample is added to showcase **markdown editing**.

Type or edit the content and apply formatting to view markdown formatted content.
  
We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
  
The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;
  // Rich Text Editor items list
  private items: (string | IToolbarItems)[] = ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', 'CreateTable',
      {
          tooltipText: 'Preview',
          template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
              '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
      }, '|', 'Undo', 'Redo'];


  private textArea: HTMLTextAreaElement;
  private mdsource: HTMLElement;
  private toolbarSettings: ToolbarSettingsModel = {
      items: this.items
  };

  private formatter: MarkdownFormatter = new MarkdownFormatter({ 
      formatTags: {
        'Blockquote': '> '
      },
      listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
      selectionTags: { 'Bold': '__', 'Italic': '_' }
  });

  public markdownConversion(): void {
      if (this.mdsource.classList.contains('e-active')) {
          let id: string = this.rteObj.getID() + 'html-view';
          let htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id);
          htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
      }
  }
  public fullPreview(): void {
      let id: string = this.rteObj.getID() + 'html-preview';
      let htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id);
      if (this.mdsource.classList.contains('e-active')) {
          this.mdsource.classList.remove('e-active');
          this.mdsource.parentElement.title = 'Preview';
          this.textArea.style.display = 'block';
          htmlPreview.style.display = 'none';
      } else {
          this.mdsource.classList.add('e-active');
          if (!htmlPreview) {
              htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
              htmlPreview.id = id;
              this.textArea.parentNode.appendChild(htmlPreview);
          }
          this.textArea.style.display = 'none';
          htmlPreview.style.display = 'block';
          htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
          this.mdsource.parentElement.title = 'Code View';
      }
  }
  public rendereComplete(): void {
      if (!this.rteObj || !this.rteObj.contentModule) {
          return;
      }
      this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
      this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
          this.markdownConversion();
      });
      this.mdsource = document.getElementById('preview-code');
      this.mdsource.addEventListener('click', (e: MouseEvent) => {
          this.fullPreview();
          if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
              this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', 'CreateTable', 'Undo', 'Redo']);
          } else {
              this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', 'CreateTable', 'Undo', 'Redo']);
          }
      });
  }
    public render() {
      return (
        <div className='control-section' id="rteMarkdown">
        <div className="content-wrapper">
            <RichTextEditorComponent id="markdownRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor; }} editorMode='Markdown'
                height='250px' valueTemplate={this.template} formatter={this.formatter} created={this.rendereComplete} toolbarSettings={this.toolbarSettings} >
                <Inject services={[MarkdownEditor, Toolbar, Image, Link, Table]} />
            </RichTextEditorComponent>
        </div>
    </div>

      );
    }
}

export default App;