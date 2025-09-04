import { Browser } from '@syncfusion/ej2-base';
import {
  Image,
  Inject,
  Link,
  MarkdownEditor,
  RichTextEditorComponent,
  Table,
  Toolbar,
  ToolbarType,ToolbarSettingsModel, IToolbarItems
} from '@syncfusion/ej2-react-richtexteditor';
import {
  PaneDirective,
  PanesDirective,
  SplitterComponent,
} from '@syncfusion/ej2-react-layouts';
import * as Marked from 'marked';
import * as React from 'react';

function App() {
  let rteObj: RichTextEditorComponent;
  let splitterInstance;
  // set the value to Rich Text Editor
  const value: string = `In Rich Text Editor , you click the toolbar buttons to format the words and the changes are visible immediately. 
Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
and phrases should look different from each other
    
Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.
    
We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
    
The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;
  // Rich Text Editor items list
  const items: (string | IToolbarItems)[] = ['Bold', 'Italic', 'StrikeThrough', '|',
                            'Formats', 'OrderedList', 'UnorderedList', '|',
                            'CreateLink', 'Image', 'Undo', 'Redo', 'CreateTable'];
  let textArea: HTMLElement;
  let srcArea: Element;
  //Rich Text Editor ToolbarSettings
  const toolbarSettings: ToolbarSettingsModel = {
      items: items,
      type: ToolbarType.Expand,
      enableFloating: false
  };
  function onCreate() {
      textArea = rteObj.contentModule.getEditPanel() as HTMLElement;
      srcArea = document.querySelector('.source-code') as HTMLElement;
      updateValue();
  }
  function onChange() {
      updateValue();
  }
  function onResizing() {
      rteObj.refreshUI();
  }
  async function updateValue() {
      srcArea.innerHTML = await Marked.parse((rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
  }
  function updateOrientation() { 
      if (Browser.isDevice) {
          splitterInstance.orientation = 'Vertical';
          (document.body.querySelector('.heading') as any).style.width = 'auto';
      }
  }
  function content1() {
      return (<div className="content">
          <RichTextEditorComponent id='markdown-editor' ref={(richtexteditor) => { rteObj = richtexteditor; }} editorMode='Markdown'  toolbarSettings={toolbarSettings} height='447px' saveInterval={1} created={onCreate.bind(this)} change={onChange.bind(this)} actionComplete={updateValue.bind(this)} value={value}>
              <Inject services={[MarkdownEditor, Toolbar, Image, Link, Table]} />
          </RichTextEditorComponent>
      </div>);
  };
  function content2() {
      return (<div className="heading right">
          <h6 className="title"><b>Markdown Preview</b></h6>
          <div className="splitter-default-content source-code pane2" style={{ padding: "20px" }}></div>
      </div>);
  };
  return (
      <div className='control-pane'>
          <div className='control-section markdown-preview' id="rtePreview">
              <div className="content-wrapper">
              <SplitterComponent id='splitter-rte-markdown-preview' ref={splitter => (splitterInstance = splitter)} height='450px' width='100%' resizing={onResizing.bind(this)} created={updateOrientation.bind(this)}>
                      <PanesDirective>
                          <PaneDirective resizable={true} size='50%' min="40%" cssClass='pane1' content={content1.bind(this)}></PaneDirective>
                          <PaneDirective min="40%" cssClass='pane2' content={content2.bind(this)}></PaneDirective>
                      </PanesDirective>
                  </SplitterComponent>
              </div>
          </div>
      </div>
  );
}
export default App;
