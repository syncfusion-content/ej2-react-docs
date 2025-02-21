import {TabComponent,TabItemDirective,TabItemsDirective} from '@syncfusion/ej2-react-navigations';
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar,Table,PasteCleanup} from '@syncfusion/ej2-react-richtexteditor';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef1 = React.createRef();
    this.editorRef2 = React.createRef();
    this.editorRef3 = React.createRef();
    this.headerText = [{ text: 'TAB 1' }, { text: 'TAB 2' }, { text: 'TAB 3' }];
    this.tools = {
      items: [
        'Bold',
        'Italic',
        'Underline',
        'StrikeThrough',
        'FontName',
        'FontSize',
        'FontColor',
        'BackgroundColor',
        'LowerCase',
        'UpperCase',
        '|',
        'Formats',
        'Alignments',
        'OrderedList',
        'UnorderedList',
        'Outdent',
        'Indent',
        '|',
        'CreateLink',
        'Image',
        '|',
        'ClearFormat',
        'Print',
        'SourceCode',
        'FullScreen',
        '|',
        'Undo',
        'Redo',
      ],
    };
  }

  content1 = () => {
    return (
      <div>
        <RichTextEditorComponent
          ref={this.editorRef1}
          toolbarSettings={this.tools}
        >
          <Inject
            services={[
              Toolbar,
              Link,
              Image,
              HtmlEditor,
              QuickToolbar,
              Table,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>
      </div>
    );
  };

  content2 = () => {
    return (
      <div>
        <RichTextEditorComponent
          ref={this.editorRef2}
          toolbarSettings={this.tools}
        >
          <Inject
            services={[
              Toolbar,
              Link,
              Image,
              HtmlEditor,
              QuickToolbar,
              Table,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>
      </div>
    );
  };

  content3 = () => {
    return (
      <div>
        <RichTextEditorComponent
          ref={this.editorRef3}
          toolbarSettings={this.tools}
        >
          <Inject
            services={[
              Toolbar,
              Link,
              Image,
              HtmlEditor,
              QuickToolbar,
              Table,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>
      </div>
    );
  };
    
    render() {
        return (<div>
            <TabComponent heightAdjustMode="Auto">
              <TabItemsDirective>
                <TabItemDirective
                  header={this.headerText[0]}
                  content={this.content1}
                />
                <TabItemDirective
                  header={this.headerText[1]}
                  content={this.content2}
                />
                <TabItemDirective
                  header={this.headerText[2]}
                  content={this.content3}
                />
              </TabItemsDirective>
        </TabComponent>
      </div>);
    }
}
export default App;
