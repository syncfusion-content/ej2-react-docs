import {TabComponent,TabItemDirective,TabItemsDirective} from '@syncfusion/ej2-react-navigations';
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar,Table,PasteCleanup} from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  private editorRef1: React.RefObject<RichTextEditorComponent>;
  private editorRef2: React.RefObject<RichTextEditorComponent>;
  private editorRef3: React.RefObject<RichTextEditorComponent>;
  private headerText: { text: string }[];
  private tools: { items: string[] };

  constructor(props: {}) {
    super(props);
    this.editorRef1 = React.createRef();
    this.editorRef2 = React.createRef();
    this.editorRef3 = React.createRef();
    this.headerText = [{ text: 'TAB 1' }, { text: 'TAB 2' }, { text: 'TAB 3' }];
    this.tools = {
      items: [
        'Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|',
        'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|',
        'Undo', 'Redo'
      ]
    };
  }

  private content1 = (): JSX.Element => {
    return (
      <RichTextEditorComponent ref={this.editorRef1} toolbarSettings={this.tools}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, PasteCleanup]} />
      </RichTextEditorComponent>
    );
  }

  private content2 = (): JSX.Element => {
    return (
      <RichTextEditorComponent ref={this.editorRef2} toolbarSettings={this.tools}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, PasteCleanup]} />
      </RichTextEditorComponent>
    );
  }

  private content3 = (): JSX.Element => {
    return (
      <RichTextEditorComponent ref={this.editorRef3} toolbarSettings={this.tools}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, PasteCleanup]} />
      </RichTextEditorComponent>
    );
  }

    
    public render() {
      return (
        <div>
             <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                  <TabItemDirective header={this.headerText[0]} content={this.content1} />
                  <TabItemDirective header={this.headerText[1]} content={this.content2} />
                  <TabItemDirective header={this.headerText[2]} content={this.content3} />
                </TabItemsDirective>
              </TabComponent>
        </div>
      );
    }
}

export default App;
