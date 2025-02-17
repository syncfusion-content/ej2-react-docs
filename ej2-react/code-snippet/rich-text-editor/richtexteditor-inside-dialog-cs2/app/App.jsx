import { DialogComponent } from '@syncfusion/ej2-react-popups';
import React, { useRef } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar,Table,PasteCleanup} from '@syncfusion/ej2-react-richtexteditor';

function App() {
  const dialogRef = useRef(null);
  const editorRef = useRef(null);

  const tools = {
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

  const openDialog = () => {
    if (this.dialogRef.current) {
      this.dialogRef.current.show();
    }
  };

  const onDialogOpen = () => {
    if (this.editorRef.current) {
      this.editorRef.current.refreshUI();
    }
  };
  return (<div>
      <ButtonComponent onClick={openDialog}>Open Dialog</ButtonComponent>
      <DialogComponent
        ref={dialogRef}
        header="Dialog Header"
        footerTemplate="Dialog Footer"
        open={onDialogOpen}
        showCloseIcon={true}
      >
        <RichTextEditorComponent ref={editorRef} toolbarSettings={tools}>
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
export default App;
