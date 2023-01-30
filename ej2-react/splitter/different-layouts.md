---
layout: post
title: Different layouts in React Splitter component | Syncfusion
description: Learn here all about Different layouts in Syncfusion React Splitter component of Syncfusion Essential JS 2 and more.
control: Different layouts 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Different layouts in React Splitter component

By using splitter control, you can create the different layouts with multiple and nested panes.

## Code editor style layout

Create the element with two child to render the outer splitter and create the inner splitter from first pane of vertical splitter.

`[Class-component]`

{% tab compileJsx=true %}

```javascript
import { Splitter } from '@syncfusion/ej2-layouts';
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

class App extends React.Component {
  public splitterInstance: Splitter;
    public paneSize1 = "53%";
    public minimumSize1 = "30%";
    public content1 = `<div class="splitter-content">
        <h3 class="h3">Preview of sample</h3>
        <div class="splitter-image">
            <img class="img1" src="https://ej2.syncfusion.com/demos/src/listview/images/albert.png" style="width: 20%;margin: 0 auto;">
        </div>
    </div>`;
    public onCreate(e: any): void {
      (this.splitterInstance as any).element.querySelector('.e-pane').setAttribute('id','splitter1');
      // Initialize Splitter component
     const splitterObj = new Splitter({
          height: '240px',
          paneSettings: [
              { content:`<div class="splitter-content">
              <h3 class="h3">HTML</h3>
              <div class="code-preview">
                  &lt;<span>!DOCTYPE html></span>
                  <div>&lt;<span>html></span></div>
                  <div>&lt;<span>body></span></div>
                  &lt;<span>div</span> id="custom-image">
                  <div style="margin-left: 5px">&lt;<span>img</span> src="src/albert.png"></div>
                  <div>&lt;<span>div</span>&gt;</div>
                  <div>&lt;<span>/body></span></div>
                  <div>&lt;<span>/html></span></div>
              </div>
              </div>`,
              min: '23%', size: '29%'  },
              { content: `<div class="splitter-content">
              <h3 class="h3">CSS</h3>
              <div class="code-preview">
                  <span>img {</span>
                      <div id="code-text">margin:<span>0 auto;</span></div>
                      <div id="code-text">display:<span>flex;</span></div>
                      <div id="code-text">height:<span>70px;</span></div>
                  <span>   }</span>
              </div>
              </div>`,min: '15%', size: '20%' },
              { content: `<div class="splitter-content">
              <h3 class="h3">JavaScript</h3>
              <div class="code-preview">
                  <span>var</span> image = document.getElementById("custom-image");
                  <div>image.addEventListener("click", function() {</div>
                      <div style="padding-left: 20px;">// Code block for click action</div>
                  <span> }</span>
              </div>
              </div>`,
              min: '35%', size: '35%' }
          ],
          width: '100%'
          });
          splitterObj.appendTo('#splitter1');
  }
    public render(): JSX.Element {
  return (
    <div id="target" className="control-section code-editor" >
      <SplitterComponent id="splitter2" height="400px" orientation="Vertical" ref={(splitter) => { this.splitterInstance = splitter! }} created={this.onCreate = this.onCreate.bind(this)}>
          <PanesDirective>
            <PaneDirective />
            <PaneDirective size={this.paneSize1} min={this.minimumSize1} content={this.content1}/>
          </PanesDirective>
      </SplitterComponent>
    </div>
  );
}
}
export default App;

```

{% endtab %}

`[Functional-component]`

{% tab compileJsx=true %}

```javascript
import { Splitter } from '@syncfusion/ej2-layouts';
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

function App () {
  let splitterInstance: Splitter;
    let paneSize1 = "53%";
    let minimumSize1 = "30%";
    let content1 = `<div class="splitter-content">
        <h3 class="h3">Preview of sample</h3>
        <div class="splitter-image">
            <img class="img1" src="https://ej2.syncfusion.com/demos/src/listview/images/albert.png" style="width: 20%;margin: 0 auto;">
        </div>
    </div>`;
    function onCreate(e: any): void {
      (splitterInstance as any).element.querySelector('.e-pane').setAttribute('id','splitter1');
      // Initialize Splitter component
     const splitterObj = new Splitter({
          height: '240px',
          paneSettings: [
              { content:`<div class="splitter-content">
              <h3 class="h3">HTML</h3>
              <div class="code-preview">
                  &lt;<span>!DOCTYPE html></span>
                  <div>&lt;<span>html></span></div>
                  <div>&lt;<span>body></span></div>
                  &lt;<span>div</span> id="custom-image">
                  <div style="margin-left: 5px">&lt;<span>img</span> src="src/albert.png"></div>
                  <div>&lt;<span>div</span>&gt;</div>
                  <div>&lt;<span>/body></span></div>
                  <div>&lt;<span>/html></span></div>
              </div>
              </div>`,
              min: '23%', size: '29%'  },
              { content: `<div class="splitter-content">
              <h3 class="h3">CSS</h3>
              <div class="code-preview">
                  <span>img {</span>
                      <div id="code-text">margin:<span>0 auto;</span></div>
                      <div id="code-text">display:<span>flex;</span></div>
                      <div id="code-text">height:<span>70px;</span></div>
                  <span>   }</span>
              </div>
              </div>`,min: '15%', size: '20%' },
              { content: `<div class="splitter-content">
              <h3 class="h3">JavaScript</h3>
              <div class="code-preview">
                  <span>var</span> image = document.getElementById("custom-image");
                  <div>image.addEventListener("click", function() {</div>
                      <div style="padding-left: 20px;">// Code block for click action</div>
                  <span> }</span>
              </div>
              </div>`,
              min: '35%', size: '35%' }
          ],
          width: '100%'
          });
          splitterObj.appendTo('#splitter1');
  }

  return (
    <div id="target" className="control-section code-editor" >
      <SplitterComponent id="splitter2" height="400px" orientation="Vertical" ref={(splitter) => { splitterInstance = splitter! }} created={onCreate = onCreate.bind(this)}>
          <PanesDirective>
            <PaneDirective />
            <PaneDirective size={paneSize1} min={minimumSize1} content={content1}/>
          </PanesDirective>
      </SplitterComponent>
    </div>
  );

}
export default App;

```

{% endtab %}

Once the above configurations has been completed, you will get the output like [this](https://ej2.syncfusion.com/react/demos/#/material/splitter/code-editor-layout)

## Outlook style layout

Create the element with three panes and place the elements within the pane to render `treeview`, `listview` and `RTE`.

`[Class-component]`

{% tab compileJsx=true %}

```javascript
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, } from '@syncfusion/ej2-react-richtexteditor';
import * as React from "react";

class App extends React.Component <{}, {}, any> {
  public splitterInstance: SplitterComponent;
  public listViewObj: ListViewComponent;
  public rteObj: RichTextEditorComponent;
  public treeInstance: TreeViewComponent;
  public textBox1: TextBoxComponent;
  public textBox2: TextBoxComponent;
  public textBox3: TextBoxComponent;

  public dataSource: any = [
    { Name: 'Selma Tally', content: 'Apology marketing email',content2:'Hello Ananya Singleton', id: '1', order: 0 },
    { Name: 'Illa Russo', content: 'Annual conference', content2: 'Hi jeani Moresa', id: '4', order: 0 },
    { Name: 'Camden Macmellon', content: 'Reference request- Camden hester', content2: 'Hello Kerry Best', order: 0 },
    { Name: 'Garth Owen', content: 'Application for job Title', content2:'Hello Illa Russo', id: '2', order: 0 },
    { Name: 'Ursula Patterson', content: 'Programmaer Position Applicant', content2: 'Hello Kerry best', id: '2', order: 0 }
  ];

  public paneSize1 = "28%";
  public minimumSize1 = "27%";
  public content1 = "<div class='splitter-content'></div>";
  public paneSize2 = "33%";
  public minimumSize2 = "23%";
  public content2 = "<div class='splitter-content'></div>";
  public paneSize3 = "37%";
  public minimumSize3 = "30%";
  public content3 = "<div ><div class='splitter-content'><div style = 'width: 100%; padding: 15px;'><table><tr><td><button class='e-btn e-flat e-outline'>To...</button></td>" +
  "<td id='firstname-target'></td></tr><tr><td><button class='e-btn e-flat e-outline'>Cc...</button></td><td id ='lastname-target'></td>" +
  "</tr><tr><td><div id='subject-text'>Subject</div></td><td id='subject-target'></td></tr></table></div>" +
  "<div class='forum'><div id='createpostholder'><div id='buttonSection'><button class='e-btn e-primary' id='send'>Send</button>" +
  "<button class='e-btn' id='discard'>Discard</button></div></div></div></div></div>";
  // Set customized list template
  public listTemplate: string = '<div class="settings e-list-wrapper e-list-multi-line e-list-avatar">' +
    '<span class="e-list-item-header">${Name}</span>' +
    '<span class="e-list-content">${content}</span>' +
    '</div>'
  // Set customized group-header template
  public grouptemplate: string = '<div class="e-list-wrapper"><span class="e-list-item-content"></span></div>';
  // Map the appropriate columns to fields property
  public listFields: object = { text: 'Name', groupBy: 'order' };
  public mailBox: object[] = [
    { id: 1, name: 'Favorites', hasChild: true},
    { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
    { id: 3, pid: 1, name: 'Sent Items'},
    { id: 4, pid: 1, name: 'Marketing Reports ', count: '6'},
    { id: 5, name: 'Andrew Fuller', hasChild: true, expanded: true },
    { id: 6, pid: 5, name: 'Inbox',  selected: true , count: '20'},
    { id: 7, pid: 5,  name: 'Drafts', count: '5'},
    { id: 15, pid: 5, name: 'Archive'},
    { id: 8, pid: 5,  name: 'Deleted Items'},
    { id: 9, pid: 5, name: 'Sent Items'},
    { id: 10, pid: 5, name: 'Sales Reports' , count: '4'},
    { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
    { id: 12, pid: 5, name: 'Outbox'},
    { id: 13, pid: 5, name: 'Junk Email'},
    { id: 14, pid: 5, name: 'RSS Feed'},
    { id: 15, pid: 5, name: 'Trash' }
  ];
  private  treeFields: object = { dataSource: this.mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };

  public onCreate(e: any): void {
    this.splitterInstance.element.querySelectorAll('.splitter-content')[0].appendChild(this.treeInstance.element);
    this.splitterInstance.element.querySelectorAll('.splitter-content')[1].appendChild(this.listViewObj.element);
    (this.splitterInstance as any).element.querySelector('#createpostholder').insertBefore(this.rteObj.element, (this.splitterInstance as any).element.querySelector('#createpostholder').childNodes[0]);
    (this.splitterInstance as any).element.querySelector('#firstname-target').appendChild(this.textBox1.element.parentElement);
    (this.splitterInstance as any).element.querySelector('#lastname-target').appendChild(this.textBox2.element.parentElement);
    (this.splitterInstance as any).element.querySelector('#subject-target').appendChild(this.textBox3.element.parentElement);
  }
  public nodeTemplate(dataSource: any): JSX.Element {
    return(<div>
        <div className="treeviewdiv">
          <div className="textcontent">
            <span className="treeName">{dataSource.name}</span>
          </div>
            { dataSource.count &&
            <div className="countcontainer">
              <span className="treeCount e-badge e-badge-primary" >{dataSource.count}</span>
            </div>
          }
        </div>
      </div>);
  };
  public onSplitterResize(): void {
    this.rteObj.refresh();
  }

  public render(): JSX.Element {
  return (
      <div id="target" className="control-section outlook-style" >
      <TextBoxComponent id="firstname" ref={(textbox) => { this.textBox1 = textbox! }}/>
      <TextBoxComponent id="lastname" ref={(textbox) => { this.textBox2 = textbox! }}/>
      <TextBoxComponent id="subject" ref={(textbox) => { this.textBox3 = textbox! }}/>
      <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor! }}  height = "262px">
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
      <TreeViewComponent id='splitter-tree' fields= {this.treeFields} nodeTemplate = {this.nodeTemplate} ref={(tree) => { this.treeInstance = tree! }}/>
      <ListViewComponent id='groupedList-split' fields = { this.listFields } className ='splitter-list' dataSource = {this.dataSource}
      cssClass = {'e-list-template'} groupTemplate = {this.grouptemplate} template = {this.listTemplate} ref={(listview) => { this.listViewObj = listview! }}/>
      <SplitterComponent id="splitter1" height="493px" width="100%" ref={(splitter) => { this.splitterInstance = splitter! }} created={this.onCreate = this.onCreate.bind(this)} resizeStop={this.onSplitterResize=this.onSplitterResize.bind(this)}>
          <PanesDirective>
              <PaneDirective size={this.paneSize1} min={this.minimumSize1} content={this.content1}/>
              <PaneDirective size={this.paneSize2} min={this.minimumSize2} content={this.content2}/>
              <PaneDirective size={this.paneSize3} min={this.minimumSize3} content={this.content3}/>
          </PanesDirective>
      </SplitterComponent>
      </div>
  );
}
}
export default App;
```

{% endtab %}

`[Functional-component]`

{% tab compileJsx=true %}

```javascript
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, } from '@syncfusion/ej2-react-richtexteditor';
import * as React from "react";

function App () {
  let splitterInstance: SplitterComponent;
  let listViewObj: ListViewComponent;
  let rteObj: RichTextEditorComponent;
  let treeInstance: TreeViewComponent;
  let textBox1: TextBoxComponent;
  let textBox2: TextBoxComponent;
  let textBox3: TextBoxComponent;

  let dataSource: any = [
    { Name: 'Selma Tally', content: 'Apology marketing email',content2:'Hello Ananya Singleton', id: '1', order: 0 },
    { Name: 'Illa Russo', content: 'Annual conference', content2: 'Hi jeani Moresa', id: '4', order: 0 },
    { Name: 'Camden Macmellon', content: 'Reference request- Camden hester', content2: 'Hello Kerry Best', order: 0 },
    { Name: 'Garth Owen', content: 'Application for job Title', content2:'Hello Illa Russo', id: '2', order: 0 },
    { Name: 'Ursula Patterson', content: 'Programmaer Position Applicant', content2: 'Hello Kerry best', id: '2', order: 0 }
  ];

  let paneSize1 = "28%";
  let minimumSize1 = "27%";
  let content1 = "<div class='splitter-content'></div>";
  let paneSize2 = "33%";
  let minimumSize2 = "23%";
  let content2 = "<div class='splitter-content'></div>";
  let paneSize3 = "37%";
  let minimumSize3 = "30%";
  let content3 = "<div ><div class='splitter-content'><div style = 'width: 100%; padding: 15px;'><table><tr><td><button class='e-btn e-flat e-outline'>To...</button></td>" +
  "<td id='firstname-target'></td></tr><tr><td><button class='e-btn e-flat e-outline'>Cc...</button></td><td id ='lastname-target'></td>" +
  "</tr><tr><td><div id='subject-text'>Subject</div></td><td id='subject-target'></td></tr></table></div>" +
  "<div class='forum'><div id='createpostholder'><div id='buttonSection'><button class='e-btn e-primary' id='send'>Send</button>" +
  "<button class='e-btn' id='discard'>Discard</button></div></div></div></div></div>";
  // Set customized list template
  let listTemplate: string = '<div class="settings e-list-wrapper e-list-multi-line e-list-avatar">' +
    '<span class="e-list-item-header">${Name}</span>' +
    '<span class="e-list-content">${content}</span>' +
    '</div>'
  // Set customized group-header template
  let grouptemplate: string = '<div class="e-list-wrapper"><span class="e-list-item-content"></span></div>';
  // Map the appropriate columns to fields property
  let listFields: object = { text: 'Name', groupBy: 'order' };
  let mailBox: object[] = [
    { id: 1, name: 'Favorites', hasChild: true},
    { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
    { id: 3, pid: 1, name: 'Sent Items'},
    { id: 4, pid: 1, name: 'Marketing Reports ', count: '6'},
    { id: 5, name: 'Andrew Fuller', hasChild: true, expanded: true },
    { id: 6, pid: 5, name: 'Inbox',  selected: true , count: '20'},
    { id: 7, pid: 5,  name: 'Drafts', count: '5'},
    { id: 15, pid: 5, name: 'Archive'},
    { id: 8, pid: 5,  name: 'Deleted Items'},
    { id: 9, pid: 5, name: 'Sent Items'},
    { id: 10, pid: 5, name: 'Sales Reports' , count: '4'},
    { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
    { id: 12, pid: 5, name: 'Outbox'},
    { id: 13, pid: 5, name: 'Junk Email'},
    { id: 14, pid: 5, name: 'RSS Feed'},
    { id: 15, pid: 5, name: 'Trash' }
  ];
  let  treeFields: object = { dataSource: mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };

  function onCreate(e: any): void {
    splitterInstance.element.querySelectorAll('.splitter-content')[0].appendChild(treeInstance.element);
    splitterInstance.element.querySelectorAll('.splitter-content')[1].appendChild(listViewObj.element);
    (splitterInstance as any).element.querySelector('#createpostholder').insertBefore(rteObj.element, (splitterInstance as any).element.querySelector('#createpostholder').childNodes[0]);
    (splitterInstance as any).element.querySelector('#firstname-target').appendChild(textBox1.element.parentElement);
    (splitterInstance as any).element.querySelector('#lastname-target').appendChild(textBox2.element.parentElement);
    (splitterInstance as any).element.querySelector('#subject-target').appendChild(textBox3.element.parentElement);
  }
  function nodeTemplate(dataSource: any): JSX.Element {
    return(<div>
        <div className="treeviewdiv">
          <div className="textcontent">
            <span className="treeName">{dataSource.name}</span>
          </div>
            { dataSource.count &&
            <div className="countcontainer">
              <span className="treeCount e-badge e-badge-primary" >{dataSource.count}</span>
            </div>
          }
        </div>
      </div>);
  };
  function onSplitterResize(): void {
    rteObj.refresh();
  }


  return (
      <div id="target" className="control-section outlook-style" >
      <TextBoxComponent id="firstname" ref={(textbox) => { textBox1 = textbox! }}/>
      <TextBoxComponent id="lastname" ref={(textbox) => { textBox2 = textbox! }}/>
      <TextBoxComponent id="subject" ref={(textbox) => { textBox3 = textbox! }}/>
      <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { rteObj = richtexteditor! }}  height = "262px">
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
      <TreeViewComponent id='splitter-tree' fields= {treeFields} nodeTemplate = {nodeTemplate} ref={(tree) => { treeInstance = tree! }}/>
      <ListViewComponent id='groupedList-split' fields = { listFields } className ='splitter-list' dataSource = {dataSource}
      cssClass = {'e-list-template'} groupTemplate = {grouptemplate} template = {listTemplate} ref={(listview) => { listViewObj = listview! }}/>
      <SplitterComponent id="splitter1" height="493px" width="100%" ref={(splitter) => { splitterInstance = splitter! }} created={onCreate = onCreate.bind(this)} resizeStop={onSplitterResize=onSplitterResize.bind(this)}>
          <PanesDirective>
              <PaneDirective size={paneSize1} min={minimumSize1} content={content1}/>
              <PaneDirective size={paneSize2} min={minimumSize2} content={content2}/>
              <PaneDirective size={paneSize3} min={minimumSize3} content={content3}/>
          </PanesDirective>
      </SplitterComponent>
      </div>
  );

}
export default App;
```

{% endtab %}

Refer below dependent styles in top of your App.css file.

```css

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';

```

Once the above configurations has been completed, you will get the output like [this](https://ej2.syncfusion.com/react/demos/#/material/splitter/outlook-style-layout).

## See Also

* [Multiple panes in Splitter](split-panes)