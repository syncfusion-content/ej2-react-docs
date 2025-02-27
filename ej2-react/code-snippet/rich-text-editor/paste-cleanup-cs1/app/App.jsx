import { HtmlEditor, Image, Inject, Link, PasteCleanup, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { detach } from '@syncfusion/ej2-base';

class App extends React.Component {

    rteValue = "<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>";

    toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
        ]
    };
    pasteCleanupSettings = {
        allowedStyleProps: ['color', 'margin', 'font-size'],
        deniedAttrs: ['class', 'title', 'id'],
        deniedTags: ['a'],
        keepFormat: false,
        plainText: false,
        prompt: true
    };

    afterPasteCleanupHandler(args) {
        let divElement = document.createElement('div');
        divElement.innerHTML = args.value;
        let pasteCleanupImage = divElement.querySelector('.pasteContent_Img');
        if (pasteCleanupImage) {
          detach(pasteCleanupImage);
          args.value = divElement.innerHTML;
        }
    }

    render() {
        return (<RichTextEditorComponent height={450}  afterPasteCleanup={this.afterPasteCleanupHandler} value={this.rteValue} toolbarSettings={this.toolbarSettings} pasteCleanupSettings={this.pasteCleanupSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, PasteCleanup]}/>
      </RichTextEditorComponent>);
    }
}
export default App;
