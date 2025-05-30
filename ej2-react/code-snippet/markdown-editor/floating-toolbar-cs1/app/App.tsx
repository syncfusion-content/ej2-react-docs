import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { MarkdownEditor, Inject, RichTextEditorComponent, Toolbar, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public checkboxObj: CheckBoxComponent;
  public rteObj: RichTextEditorComponent;
  public toolbarSettings: object = {
     enableFloating: false,
     items: [
      'Bold',
      'Italic',
      'StrikeThrough',
      'SuperScript',
      'SubScript',
      '|',
      'Formats',
      '|',
      'OrderedList',
      'UnorderedList',
      'CreateLink',
      'Image',
      'CreateTable',
      '|',
      'Undo',
      'Redo',
    ],
  }

  private rteValue: string = "In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";
  public onChange(args: ChangeEventArgs): void {
    this.rteObj.toolbarSettings.enableFloating = args.checked;
    this.rteObj.dataBind();
 }

  public render() {
    return (
      <div>
        <CheckBoxComponent checked={false} label='Enable Floating' ref={(scope) => { this.checkboxObj = scope! }} change={ this.onChange=this.onChange.bind(this) } />
        <br />
        <br />
        <br />
        <RichTextEditorComponent ref={(scope) => { this.rteObj = scope! }} editorMode={'Markdown'} value={this.rteValue} height={450} toolbarSettings={this.toolbarSettings}>
            <Inject services={[Toolbar, MarkdownEditor, Link, Image, Table ]}/>
        </RichTextEditorComponent>
      </div>
    );
  }
}

export default App;
