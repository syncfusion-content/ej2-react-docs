{% raw %}



/**
 * Rich Text Editor - Custom Tool Sample
 */
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { HtmlEditor, Image, Inject, Link, NodeSelection, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public rteObj: RichTextEditorComponent;
  // set the value to Rich Text Editor
  public template: string = `<div style="display:block;"><p style="margin-right:10px">The custom command "insert special character" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p></div>`;

  public selection: NodeSelection = new NodeSelection();
  public ranges: Range;
  public dialogObj: DialogComponent;
  // Rich Text Editor items list
  public items: object = ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
    'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
    {
      template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>',
      undo: true,
      click: this.onClick.bind(this),
      tooltipText: 'Insert Symbol'
    }, '|', 'Undo', 'Redo'
  ];

  // Rich Text Editor ToolbarSettings
  public toolbarSettings: object = {
    items: this.items
  };

  public dlgButtons: any = [
    { buttonModel: { content: "Insert", isPrimary: true }, click: this.onInsert.bind(this) },
    { buttonModel: { content: 'Cancel' }, click: this.onCancel }
  ];
  public header: string = 'Special Characters';
  public target: Element = document.getElementById('rteSection') as any;
  public height: any = 'auto';


  public dialogCreate(): void {
    const dialogCtn: HTMLElement = document.getElementById('rteSpecial_char') as HTMLElement;
    dialogCtn.onclick = (e: Event) => {
      const target: HTMLElement = e.target as HTMLElement;
      const activeEle: Element = this.dialogObj.element.querySelector('.char_block.e-active') as HTMLElement;
      if (target.classList.contains('char_block')) {
        target.classList.add('e-active');
        if (activeEle) {
          activeEle.classList.remove('e-active');
        }
      }
    };
  }

  public onInsert(): void {
    const activeEle: Element = this.dialogObj.element.querySelector('.char_block.e-active') as any;
    if (activeEle) {
      this.ranges.insertNode(document.createTextNode(activeEle.textContent as string));
    }
    this.dialogOverlay();
  }

  public onClick(): void {
      this.ranges = this.selection.getRange(document);
      this.dialogObj.width = (this.rteObj as any).element.offsetWidth * 0.5;
      this.dialogObj.content = document.getElementById('rteSpecial_char') as HTMLElement;
      this.dialogObj.dataBind();
      this.dialogObj.show();
  }

  public dialogOverlay(): void {
    const activeEle: Element = this.dialogObj.element.querySelector('.char_block.e-active') as HTMLElement;
    if (activeEle) {
      activeEle.classList.remove('e-active');
    }
    this.dialogObj.hide();
  }

  public onCancel(e: any): void {
    const activeEle: Element = (this as any).element.querySelector('.char_block.e-active');
    if (activeEle) {
      activeEle.classList.remove('e-active');
    }
    (this as any).hide();
  }

  public render() {
    const hideDiv = { display: "none" };
    return (
      <div className='control-pane'>
        <div className='control-section e-rte-custom-tbar-section' id="rteCustomTool">
          <div className='rte-control-section' id='rteSection'>
            <RichTextEditorComponent id="defaultRTE" ref={(scope) => { this.rteObj = scope! }}
              valueTemplate={this.template} toolbarSettings={this.toolbarSettings}>
              <Inject services={[HtmlEditor, Toolbar, Link, Image, QuickToolbar]} />
            </RichTextEditorComponent>
            <DialogComponent id='customTbarDlg' ref={(scope) => { this.dialogObj = scope! }}
              buttons={this.dlgButtons} overlayClick={this.dialogOverlay = this.dialogOverlay.bind(this) } header={this.header} visible={false}
              showCloseIcon={false} target={'#rteSection'} height={this.height} created={this.dialogCreate = this.dialogCreate.bind(this)} isModal={true} cssClass={'e-rte-elements'} />
            <div id="customTbarDialog" style={hideDiv}>
              <div id="rteSpecial_char">
                <div className="char_block" title="&#94;">&#94;</div>
                <div className="char_block" title="&#95;">&#95;</div>
                <div className="char_block" title="&#96;">&#96;</div>
                <div className="char_block" title="&#123;">&#123;</div>
                <div className="char_block" title="&#124;">&#124;</div>
                <div className="char_block" title="&#125;">&#125;</div>
                <div className="char_block" title="&#126;">&#126;</div>
                <div className="char_block" title="&#160;">&#160;</div>
                <div className="char_block" title="&#161;">&#161;</div>
                <div className="char_block" title="&#162;">&#162;</div>
                <div className="char_block" title="&#163;">&#163;</div>
                <div className="char_block" title="&#164;">&#164;</div>
                <div className="char_block" title="&#165;">&#165;</div>
                <div className="char_block" title="&#x20B9;">&#x20B9;</div>
                <div className="char_block" title="&#166;">&#166;</div>
                <div className="char_block" title="&#167;">&#167;</div>
                <div className="char_block" title="&#168;">&#168;</div>
                <div className="char_block" title="&#169;">&#169;</div>
                <div className="char_block" title="&#170;">&#170;</div>
                <div className="char_block" title="&#171;">&#171;</div>
                <div className="char_block" title="&#172;">&#172;</div>
                <div className="char_block" title="&#173;">&#173;</div>
                <div className="char_block" title="&#174;">&#174;</div>
                <div className="char_block" title="&#175;">&#175;</div>
                <div className="char_block" title="&#176;">&#176;</div>
                <div className="char_block" title="&#177;">&#177;</div>
                <div className="char_block" title="&#178;">&#178;</div>
                <div className="char_block" title="&#179;">&#179;</div>
                <div className="char_block" title="&#180;">&#180;</div>
                <div className="char_block" title="&#181;">&#181;</div>
                <div className="char_block" title="&#182;">&#182;</div>
                <div className="char_block" title="&#183;">&#183;</div>
                <div className="char_block" title="&#184;">&#184;</div>
                <div className="char_block" title="&#185;">&#185;</div>
                <div className="char_block" title="&#186;">&#186;</div>
                <div className="char_block" title="&#187;">&#187;</div>
                <div className="char_block" title="&#188;">&#188;</div>
                <div className="char_block" title="&#189;">&#189;</div>
                <div className="char_block" title="&#190;">&#190;</div>
                <div className="char_block" title="&#191;">&#191;</div>
                <div className="char_block" title="&#192;">&#192;</div>
                <div className="char_block" title="&#193;">&#193;</div>
                <div className="char_block" title="&#194;">&#194;</div>
                <div className="char_block" title="&#195;">&#195;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



{% endraw %}