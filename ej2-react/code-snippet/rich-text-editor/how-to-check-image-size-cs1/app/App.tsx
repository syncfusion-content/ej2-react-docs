import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

export class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
      items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent', '|',
          'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
          'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };

  private insertImageSettings: object = {
      saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
      path: "../Images/"
  };

  public onImageUploading = (args: any) => {
      console.log("file is uploading");
      let imgSize: number = 500000;
      let sizeInBytes: number = args.fileData.size;
      if ( imgSize < sizeInBytes ) {
          args.cancel = true;
      }

  }

  public render() {
      return (
        <RichTextEditorComponent toolbarSettings={this.toolbarSettings} insertImageSettings={this.insertImageSettings} imageUploading={this.onImageUploading.bind(this)} >
          <Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
      );
    }
  }

export default App;
