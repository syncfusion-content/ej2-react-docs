import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import {
  RichTextEditorComponent,
  Inject,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar,
  Table,
  PasteCleanup,
} from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef1 = React.createRef();
    this.editorRef2 = React.createRef();
    this.editorRef3 = React.createRef();
    this.dialogRef = React.createRef();
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

  openDialog = () => {
    if (this.dialogRef.current) {
        this.dialogRef.current.show();
    }
  };
  onDialogOpen = () => {
    if (this.editorRef.current) {
      this.editorRef.current.refreshUI();
    }
  };
  render() {
    return (
      <div>
        <ButtonComponent onClick={this.openDialog}>Open Dialog</ButtonComponent>
        <DialogComponent
          ref={this.dialogRef}
          header="Dialog Header"
          footerTemplate="Dialog Footer"
          open={this.onDialogOpen}
          showCloseIcon={true}
        >
          <RichTextEditorComponent
            ref={this.editorRef}
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
        </DialogComponent>
      </div>
    );
  }
}
export default App;
