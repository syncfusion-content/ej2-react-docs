import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
class App extends React.Component {
    rteObj;
    toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    keyConfig = {
      bold: 'ctrl+alt+b',
      italic: 'ctrl+alt+i',
      underline: 'ctrl+alt+u',
    };
    docKeyUp(e) {
        if (e.altKey && e.keyCode === 84) { /* t */
            // press alt+t to focus the component.
            this.rteObj.focusIn();
        }
    }
    componentDidMount() {
        document.addEventListener('keyup', this.docKeyUp.bind(this));
    }
    render() {
        return (<RichTextEditorComponent ref={(richtexteditor) => { this.rteObj = richtexteditor; }} height={450} toolbarSettings={this.toolbarSettings} keyConfig={this.keyConfig}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
    }
}
export default App;