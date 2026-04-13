import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { MarkdownEditor, Image, Table, Inject, Link, NodeSelection, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App(){
  let rteObj: RichTextEditorComponent;
  let template: string = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`;

  let selection: NodeSelection = new NodeSelection();
  let ranges: Range;
  let dialogObj: DialogComponent;

  let items: object = ['Bold',
      'Italic',
      'StrikeThrough',
      '|',
      'Formats',
      'OrderedList',
      'UnorderedList',
      '|',
      'CreateLink',
      '|',
    {
      template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>',
      undo: true,
      click: onClick.bind(this),
      tooltipText: 'Insert Symbol'
    }
  ];

  // Rich Text Editor ToolbarSettings
  let toolbarSettings: object = {
    items: items
  };

  let dlgButtons: any = [
    { buttonModel: { content: "Insert", isPrimary: true }, click: onInsert.bind(this) },
    { buttonModel: { content: 'Cancel' }, click: onCancel }
  ];
  let header: string = 'Special Characters';
  let target: Element = document.getElementById('rteSection') as any;
  let height: any = 'auto';


  function dialogCreate(): void {
    const dialogCtn: HTMLElement = document.getElementById('rteSpecial_char') as HTMLElement;
    dialogCtn.onclick = (e: Event) => {
      const target: HTMLElement = e.target as HTMLElement;
      const activeEle: Element = dialogObj.element.querySelector('.char_block.e-active') as HTMLElement;
      if (target.classList.contains('char_block')) {
        target.classList.add('e-active');
        if (activeEle) {
          activeEle.classList.remove('e-active');
        }
      }
    };
  }

  function onInsert(): void {
    const activeEle: Element = dialogObj.element.querySelector('.char_block.e-active') as any;
      if (activeEle) {
        let specialChar = activeEle.textContent;
        rteObj.executeCommand('insertText', specialChar);
      }
      dialogOverlay();
  }

  function onClick(): void {
      ranges = selection.getRange(document);
      dialogObj.width = (rteObj as any).element.offsetWidth * 0.5;
      dialogObj.content = document.getElementById('rteSpecial_char') as HTMLElement;
      dialogObj.dataBind();
      dialogObj.show();
  }

  function dialogOverlay(): void {
    const activeEle: Element = dialogObj.element.querySelector('.char_block.e-active') as HTMLElement;
    if (activeEle) {
      activeEle.classList.remove('e-active');
    }
    dialogObj.hide();
  }

  function onCancel(e: any): void {
    const activeEle: Element = (this as any).element.querySelector('.char_block.e-active');
    if (activeEle) {
      activeEle.classList.remove('e-active');
    }
    (this as any).hide();
  }

  const hideDiv = { display: "none" };
  return (
    <div className='control-pane'>
      <div className='control-section e-rte-custom-tbar-section' id="rteCustomTool">
        <div className='rte-control-section' id='rteSection'>
          <RichTextEditorComponent id="defaultRTE" ref={(scope) => { rteObj = scope! }}
            value={template} editorMode={'Markdown'}  toolbarSettings={toolbarSettings}>
            <Inject services={[MarkdownEditor, Toolbar, Link, Image, Table]} />
          </RichTextEditorComponent>
          <DialogComponent id='customTbarDlg' ref={(scope) => { dialogObj = scope! }}
            buttons={dlgButtons} overlayClick={dialogOverlay.bind(this) } header={header} visible={false}
            showCloseIcon={false} target={'#rteSection'} height={height} created={dialogCreate.bind(this)} isModal={true} cssClass={'e-rte-elements'}/>
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

export default App;
