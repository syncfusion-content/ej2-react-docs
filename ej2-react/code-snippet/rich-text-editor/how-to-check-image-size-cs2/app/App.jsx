import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
function App() {
    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    const insertImageSettings = {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Images/"
    };
    function onImageUploading(args) {
        console.log("file is uploading");
        let imgSize = 500000;
        let sizeInBytes = args.fileData.size;
        if (imgSize < sizeInBytes) {
            args.cancel = true;
        }
    }
    return (<RichTextEditorComponent toolbarSettings={toolbarSettings} insertImageSettings={insertImageSettings} imageUploading={onImageUploading.bind(this)}>
      <Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
