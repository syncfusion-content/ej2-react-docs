import { Browser } from '@syncfusion/ej2-base';
import {
  Image,
  Inject,
  Link,
  MarkdownEditor,
  RichTextEditorComponent,
  Table,
  Toolbar,
  ToolbarType
} from '@syncfusion/ej2-react-richtexteditor';
import {
  PaneDirective,
  PanesDirective,
  SplitterComponent,
} from '@syncfusion/ej2-react-layouts';
import * as Marked from 'marked';
import * as React from 'react';

class App extends React.Component {
    rteObj;
    splitterInstance;
    // set the value to Rich Text Editor
    value = `In Rich Text Editor , you click the toolbar buttons to format the words and the changes are visible immediately. 
Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
and phrases should look different from each other
    
Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.
    
We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
    
The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;
    // Rich Text Editor items list
    items = ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', 'Undo', 'Redo', 'CreateTable'];
    textArea;
    srcArea;
    placeholder = 'Enter your text here...';
    //Rich Text Editor ToolbarSettings
    toolbarSettings = {
        items: this.items,
        type: ToolbarType.Expand,
        enableFloating: false
    };
    onCreate() {
        this.textArea = this.rteObj.contentModule.getEditPanel();
        this.srcArea = document.querySelector('.source-code');
        this.updateValue();
    }
    onChange() {
        this.updateValue();
    }
    onResizing() {
        this.rteObj.refreshUI();
    }
    updateValue() {
        this.srcArea.innerHTML = Marked(this.rteObj.contentModule.getEditPanel().value);
    }
    updateOrientation() {
        if (Browser.isDevice) {
            this.splitterInstance.orientation = 'Vertical';
            document.body.querySelector('.heading').style.width = 'auto';
        }
    }
    content1() {
        return (<div className="content">
            <RichTextEditorComponent id='defaultRTE' ref={(richtexteditor) => { this.rteObj = richtexteditor; }} editorMode='Markdown' toolbarSettings={this.toolbarSettings} height='447px' saveInterval={1} created={this.onCreate.bind(this)} change={this.onChange.bind(this)} actionComplete={this.updateValue.bind(this)} value={this.value}>
                 <Inject services={[MarkdownEditor, Toolbar, Image, Link, Table]} />
            </RichTextEditorComponent>
        </div>);
    }
    ;
    content2() {
        return (<div className="heading right">
            <h6 className="title"><b>Markdown Preview</b></h6>
            <div className="splitter-default-content source-code pane2" style={{ padding: "20px" }}></div>
        </div>);
    }
    ;
    render() {
        return (<div id="rte-default" className='control-pane'>
                    <div className='control-section markdown-preview' id="rtePreview">
                        <div className="content-wrapper">
                        <SplitterComponent id='splitter-rte-markdown-preview' ref={splitter => (this.splitterInstance = splitter)} height='450px' width='100%' resizing={this.onResizing.bind(this)} created={this.updateOrientation.bind(this)}>
                            <PanesDirective>
                                <PaneDirective resizable={true} size='50%' min="40%" cssClass='pane1' content={this.content1.bind(this)}></PaneDirective>
                                <PaneDirective min="40%" cssClass='pane2' content={this.content2.bind(this)}></PaneDirective>
                            </PanesDirective>
                        </SplitterComponent>
                        </div>
                    </div>
                </div>);
        }
}
export default App;