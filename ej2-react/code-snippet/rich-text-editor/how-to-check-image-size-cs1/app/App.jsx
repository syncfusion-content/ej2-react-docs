import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
export class App extends React.Component {
    toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    insertImageSettings = {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Images/"
    };
    onImageUploading = (args) => {
        console.log("file is uploading");
        let imgSize = 500000;
        let sizeInBytes = args.fileData.size;
        if (imgSize < sizeInBytes) {
            args.cancel = true;
        }
    };
    render() {
        return (<RichTextEditorComponent toolbarSettings={this.toolbarSettings} insertImageSettings={this.insertImageSettings} imageUploading={this.onImageUploading.bind(this)}>
        <Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
